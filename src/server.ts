import sirv from "sirv";
import polka from "polka";
import bodyParser from "body-parser";
import compression from "compression";
import * as sapper from "@sapper/server";
import { v4 as uuidv4 } from "uuid";
import helmet from "helmet";

const { PORT, NODE_ENV } = process.env;
const dev: boolean = NODE_ENV === "development";

polka()
	.use((req, res, next) => {
		res.locals = { nonce: uuidv4() }
		next();
	})
	.use(
		helmet({
			contentSecurityPolicy: {
				directives: {
					defaultSrc: ["'self'"],
					// Has to be unsafe-eval because %sapper.scripts% uses eval
					scriptSrc: [
						"'self' 'unsafe-eval'",
						//@ts-ignore
						(_req, res) => `'nonce-${res.locals.nonce}'`,
					],
					// Has to be unsafe-inline currently, because svelte-awesome & svelte-image sets inline style
					styleSrc: ["'self' 'unsafe-inline'"],
					// data: needed for svelte-image placeholders and svelte-awesome icons
					imgSrc: ["'self'", "data:"],
					// localhost:10000 needed by __sapper__ itself
					connectSrc: ["'self'", "http://localhost:10000"],
				},
			},
		}),
		bodyParser.json(),
		compression({ threshold: 0 }),
		sirv("static", { dev, maxAge: 60 * 60 * 24, immutable: true }),
		sapper.middleware()
	)
	.listen(PORT || 3000, (err: any) => {
		if (err) console.log("error", err);
	});
