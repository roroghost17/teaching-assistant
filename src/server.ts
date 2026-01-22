import app from './app';
import dotenv from 'dotenv';
import { Maxim, MaximLogger } from '@maximai/maxim-js';

dotenv.config();

// Initialize global Maxim logger
declare global {
  var maxim: MaximLogger; // Maxim logger instance
}

const PORT = process.env.PORT || 3001;

// Initialize Maxim logger with error handling
const initializeMaximLogger = async () => {
  try {
    if (!process.env.MAXIM_API_KEY || !process.env.MAXIM_REPO_ID) {
      throw new Error('MAXIM_API_KEY and MAXIM_REPO_ID must be set');
    }
    const maxim = new Maxim({
      apiKey: process.env.MAXIM_API_KEY,
    });
    const logger = await maxim.logger({
      "id": process.env.MAXIM_REPO_ID,
    });
    if (!logger) {
      throw new Error('Failed to initialize Maxim logger');
    }
    global.maxim = logger;
    console.log('Maxim logger initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Maxim logger:', error);
    process.exit(1);
  }
};

// Start server after logger initialization
const startServer = async () => {
  await initializeMaximLogger();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer().catch(console.error);

