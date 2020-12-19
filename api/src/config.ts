const die = (err: string) => {
  throw new Error(`env config missing: ${err}`);
};

export const PORT = 4096;

export const MYSQL_DB_CONFIG = {
  host: process.env.MYSQL_HOST || die('mysql host'),
  port: parseInt(process.env.MYSQL_PORT || die('mysql port'), 10),
  user: process.env.MYSQL_USER || die('mysql username'),
  password: process.env.MYSQL_PASSWORD || die('mysql password'),
  database: process.env.MYSQL_DB || die('mysql db'),
};

export const GRAPHQL_ENDPOINT =
  process.env.GRAPHQL_ENDPOINT || die('graphql endpoint');

export const CHALLENGE_ALGORITHM = 'aes-256-ctr';
export const CHALLENGE_PASSWORD =
  process.env.CHALLENGE_PASSWORD || die('challenge password');

export const NUM_CHALLENGE_COURSES = 3; // number of courses to select for the challenge
export const CHALLENGE_SEASON = '201903'; // season to select the challenge from
export const MAX_CHALLENGE_REQUESTS = 100; // maximum number of allowed challenge tries

// Secret for session cookie signing.
export const SESSION_SECRET =
  process.env.SESSION_SECRET ?? die('session secret');

// Note that an existing but empty FERRY_SECRET is meaningful,
// as it enables us to bypass the header requirement in development.
export const FERRY_SECRET = process.env.FERRY_SECRET ?? die('ferry secret');

// Location of statically generated files. This is relative
// to the working directory, which is api.
export const STATIC_FILE_DIR = './static';
