import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import { fileURLToPath } from 'url';

// Setup paths (ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const ASSETS_DIR = path.join(PROJECT_ROOT, 'src/assets');

ffmpeg.setFfmpegPath(ffmpegPath);

console.log(`Starting media optimization in: ${ASSETS_DIR}`);

// Helper to get all files recursively
const getAllFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(file));
        } else {
            results.push(file);
        }
    });
    return results;
};

const optimizeImage = async (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const newPath = filePath.replace(ext, '.webp');
    console.log(`Optimizing Image: ${path.basename(filePath)} -> .webp`);

    try {
        await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(newPath);

        // Remove original if successful
        fs.unlinkSync(filePath);
        console.log(`  ✓ Done. Removed original.`);
    } catch (err) {
        console.error(`  ✗ Error processing image ${filePath}:`, err);
    }
};

const optimizeVideo = (filePath) => {
    return new Promise((resolve, reject) => {
        const ext = path.extname(filePath).toLowerCase();
        if (ext !== '.mp4') return resolve();

        // For this script, we'll output to a temporary file then replace
        const tempPath = filePath.replace('.mp4', '_temp.mp4');
        const filename = path.basename(filePath);

        console.log(`Optimizing Video: ${filename}`);

        ffmpeg(filePath)
            .outputOptions([
                '-c:v libx264',
                '-crf 28',  // Higher CRF = lower quality/size. 28 is decent for web background.
                '-preset slower',
                '-c:a aac',
                '-b:a 128k',
                '-movflags +faststart' // Optimize for web streaming
            ])
            .output(tempPath)
            .on('end', () => {
                console.log(`  ✓ Video optimized: ${filename}`);
                // Replace original
                try {
                    fs.unlinkSync(filePath);
                    fs.renameSync(tempPath, filePath);
                    resolve();
                } catch (e) {
                    console.error('Error replacing video file:', e);
                    reject(e);
                }
            })
            .on('error', (err) => {
                console.error(`  ✗ Error optimizing video ${filename}:`, err);
                // Try to cleanup temp
                if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
                resolve(); // Don't block other files
            })
            .run();
    });
};

const run = async () => {
    const allFiles = getAllFiles(ASSETS_DIR);

    // Process Images in parallel
    const imagePromises = allFiles.map(file => optimizeImage(file));
    await Promise.all(imagePromises);

    // Process Videos sequentially (ffmpeg is heavy)
    for (const file of allFiles) {
        if (path.extname(file).toLowerCase() === '.mp4') {
            await optimizeVideo(file);
        }
    }

    console.log('Optimization complete!');
};

run().catch(err => console.error(err));
