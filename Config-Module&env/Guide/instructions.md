# 🧪 NestJS Config Module & ENV Handling

🔧 ConfigModule Setup – Dynamic Environment Based Configuration

NestJS ka @nestjs/config module use karke hum multi-environment configs handle kar sakte hain jaise .env, .env.production.

## Installation:

npm i @nestjs/config
npm i joi

## AppModule Configuration:

import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config/app.config';
import { databaseConfig } from './config/database.config';

ConfigModule.forRoot({
isGlobal: true,
envFilePath: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
load: \[appConfig, databaseConfig],
});

- isGlobal: true ka matlab hai ConfigModule ko har module mein import karne ki zarurat nahi.
- load option se aap multiple config files ko dynamically register kar sakte hain.

\============================================================

🗂️ Folder Structure & Config Files

config/
├── app.config.ts
├── database.config.ts
└── env.validation.ts

## app.config.ts:

import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
port: parseInt(process.env.PORT, 10) || 3000,
mode: process.env.NODE_ENV || 'development',
}));

## database.config.ts:

import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('db', () => ({
host: process.env.DB_HOST,
port: parseInt(process.env.DB_PORT, 10),
}));

## env.validation.ts (using Joi):

import \* as Joi from 'joi';

export const validationSchema = Joi.object({
PORT: Joi.number().required(),
NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
DB_HOST: Joi.string().required(),
DB_PORT: Joi.number().required(),
});

## ConfigModule Update:

ConfigModule.forRoot({
isGlobal: true,
envFilePath: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
load: \[appConfig, databaseConfig],
validationSchema,
});

\============================================================

🧩 Partial Config Registration – Module Specific

## auth.config.ts:

import { registerAs } from '@nestjs/config';

export const authConfig = registerAs('auth', () => ({
jwtSecret: process.env.JWT_SECRET,
}));

## auth.module.ts:

@Module({
imports: \[ConfigModule.forFeature(authConfig)],
})

\============================================================

📥 Injecting Config Values Using @Inject

import { ConfigType } from '@nestjs/config';
import { authConfig } from '../config/auth.config';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
constructor(
@Inject(authConfig.KEY)
private readonly authSettings: ConfigType<typeof authConfig>,
) {
console.log(this.authSettings.jwtSecret);
}
}

Faida: ConfigType se strongly typed config injection milta hai.

\============================================================

🛡️ ENV Variable Validation – Why Use Joi?

- NestJS officially Joi recommend karta hai.
- Runtime par env vars ko validate karta hai.
- Agar koi variable missing ya invalid ho to app boot nahi hoti.
- Safer aur production-friendly approach.

Alternative:

- Zod bhi ek lightweight schema validator hai.
- Lekin NestJS ecosystem mein Joi zyada reliable aur compatible hai.

Recommendation: Stick with Joi unless you really need Zod.

\============================================================

🚀 Accessing ENV via ConfigService

constructor(private readonly configService: ConfigService) {}

const port = this.configService.get<number>('PORT');
const env = this.configService.get<string>('NODE_ENV');

Note:

- ConfigService best option hai jab aap directly ENV key use kar rahe ho (not registerAs).
- get() method optional chaining support karta hai.

\============================================================

💡 Best Practices Summary

- Multiple env files use karo (.env, .env.production)
- Config ko domain-based organize karo (app, db, auth)
- registerAs ke saath strongly typed injection use karo
- ConfigModule.forFeature() se partial config inject karo
- Joi ka use karo for validating env vars
- ConfigService ko prefer karo over direct process.env usage
- isGlobal: true ka use karna zaroori hai taake bar bar import na karna pade

\============================================================
