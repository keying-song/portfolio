import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home', page:'home' });
});
/* GET home page. */
router.get('/home', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home', page:'home' });
});
/* GET about page. */
router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About UMe', page:'about' });
});
/* GET projects page. */
router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About U', page:'about' });
});
export default router;
