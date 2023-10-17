// JWT backend authentication file that establishes user context for resolvers and server file.

import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';

const secret = 'oursecretbot';   // leave this here while we are developing, but make a .env file once the backend created. so this line will reference process.env.SECRET instead of the current string.
const expiration = '2h';

// export default {
export const AuthenticationError = new GraphQLError('Could not authenticate user.', {
  extensions: {
    code: 'UNAUTHENTICATED',
  },
});

export const authMiddleware = function ({ req }) {
  // Allows token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
  }

  return req;
};

export const signToken = function ({ username, email, _id }) {
  const payload = { username, email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};
// };

















