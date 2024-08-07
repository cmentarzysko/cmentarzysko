import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const S3Schema = {
  S3_ACCESS_KEY_ID: z.string().min(1),
  S3_SECRET_ACCESS_KEY: z.string().min(1),
  S3_REGION: z.string().min(1),
  S3_BUCKET: z.string().min(1),
  S3_ENDPOINT: z.string().min(1).optional(),
}

const uploadthingSchema = {
  UPLOADTHING_SECRET: z.string().min(1),
}

export const env = createEnv({
  server: {
    ...(process.env.STORAGE_TYPE === 'S3' && S3Schema),
    ...(process.env.STORAGE_TYPE === 'uploadthing' && uploadthingSchema),
    STORAGE_TYPE: z.enum(['local', 'S3', 'uploadthing']),
    DATABASE_TYPE: z.enum(['postgres', 'mongo']),
    DATABASE_URI: z.string().min(1),
    PAYLOAD_SECRET: z.string().min(1),
  },
  client: {},

  experimental__runtimeEnv: {},
})

export function isDevelopment() {
  return process.env.NODE_ENV === 'development'
}
