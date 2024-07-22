import {
	INestApplication,
	Logger,
} from "@nestjs/common";

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

export class App {
	private _app: INestApplication;

	private readonly _port = 6285;
	private readonly _logger = new Logger(App.name);

	public async bootstrap(): Promise<void> {
		this._app = await NestFactory.create(AppModule);

		this._configure();

		await this._app.listen(
			this._port,
			() => this._logger.log(`Server started at port ${this._port}`)
		);
	}

	private _configure(): void {
		this._app.enableCors();
	}
}
