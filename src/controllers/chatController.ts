import { Request, Response } from 'express';
import { z, ZodError } from 'zod';
import { getTeacherResponse } from '../services/openaiService';

const messageSchema = z.object({
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string(),
});

const chatRequestSchema = z.object({
  nativeLanguage: z.string(),
  targetLanguage: z.string(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  messages: z.array(messageSchema),
});

export const chatController = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = chatRequestSchema.parse(req.body);

    const response = await getTeacherResponse({
      nativeLanguage: validatedData.nativeLanguage,
      targetLanguage: validatedData.targetLanguage,
      difficulty: validatedData.difficulty,
      messages: validatedData.messages as any, // Type assertion to match service interface
    });

    res.json({ response });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: 'Invalid request data', details: (error as any).errors });
    } else {
      console.error('Error in chatController:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

