import { THIRTY_DAYS } from '../constants/index.js';

export const setupSession = (res, session) => {
  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none', // Дозволяє передачу між різними доменами
    // domain: '.mitka.onrender.com', // Основний домен
    expires: new Date(Date.now() + THIRTY_DAYS),
  });
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    secure: true,
    sameSite: 'none', // Дозволяє передачу між різними доменами
    // domain: '.mitka.onrender.com', // Основний домен
    expires: new Date(Date.now() + THIRTY_DAYS),
  });
};
