export default class AppController {
  static getHomepage(req, res) {
    return res.status(200).send('Hello Holberton School!');
  }
}
