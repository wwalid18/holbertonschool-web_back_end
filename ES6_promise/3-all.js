import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.body.firstName} ${userResponse.body.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
