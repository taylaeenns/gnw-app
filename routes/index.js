import express from 'express';

const router = express.Router();

const agents = {
  "Hilo": [
    { name: "Agent 1", address: "123 Main St", city: "Hilo", state: "HI", zip: "96720", phone: "123-456-7890" },
    { name: "Agent 2", address: "456 Another St", city: "Hilo", state: "HI", zip: "96720", phone: "987-654-3210" },
  ],
  "Kahului": [
    { name: "Agent 1", address: "789 Some Rd", city: "Kahului", state: "HI", zip: "96732", phone: "555-555-5555" },
  ],
};

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/products', (req, res) => {
  res.render('products');
});

router.get('/home-insurance', (req, res) => {
  res.render('home-insurance');
});

router.get('/dwelling-fire', (req, res) => {
  res.render('dwelling-fire');
});

router.get('/modular-home-insurance', (req, res) => {
  res.render('modular-home-insurance');
});

router.get('/auto-insurance', (req, res) => {
  res.render('auto-insurance');
});

router.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy');
});


router.get('/agent-portal', (req, res) => {
  res.render('agent-portal');
});

router.get('/find-agent', (req, res) => {
  res.render('find-agent');
});

router.get('/minnesota-list', (req, res) => {
  res.render('minnesota-list');
});

router.get('/agents-oklahoma', (req, res) => {
  res.render('agents-oklahoma');
});

router.get('/agents-blaine', (req, res) => {
  res.render('agents-blaine');
});

router.get('/agents-brinerd', (req, res) => {
  res.render('agents-brinerd');
});

router.get('/agents-bloomington', (req, res) => {
  res.render('agents-bloomington');
});

router.get('/agents-cannon-falls', (req, res) => {
  res.render('agents-cannon-falls');
});

router.get('/agents-coon-rapids', (req, res) => {
  res.render('agents-coon-rapids');
});


router.get('/agents-edina', (req, res) => {
  res.render('agents-edina');
});


router.get('/agents-excelsior', (req, res) => {
  res.render('agents-excelsior');
});

router.get('/agents-forest-lake', (req, res) => {
  res.render('agents-forest-lake');
});

router.get('/agents-golden-valley', (req, res) => {
  res.render('agents-golden-valley');
});

router.get('/agents-lake-city', (req, res) => {
  res.render('agents-lake-city');
});

router.get('/agents-lewiston', (req, res) => {
  res.render('agents-lewiston');
});

router.get('/agents-new-hope', (req, res) => {
  res.render('agents-new-hope');
});

router.get('/agents-new-prague', (req, res) => {
  res.render('agents-new-prague');
});

router.get('/agents-northfield', (req, res) => {
  res.render('agents-northfield');
});

router.get('/agents-plymouth', (req, res) => {
  res.render('agents-plymouth');
});

router.get('/agents-rochester', (req, res) => {
  res.render('agents-rochester');
});

router.get('/agents-rogers', (req, res) => {
  res.render('agents-rogers');
});

router.get('/agents-savage', (req, res) => {
  res.render('agents-savage');
});

router.get('/agents-st-louis', (req, res) => {
  res.render('agents-st-louis');
});

router.get('/agents-stewartville', (req, res) => {
  res.render('agents-stewartville');
});

router.get('/agents-virginia', (req, res) => {
  res.render('agents-virginia');
});

router.get('/agents-white-bear-lake', (req, res) => {
  res.render('agents-white-bear-lake');
});


router.get('/agents-winona', (req, res) => {
  res.render('agents-winona');
});

router.get('/frequently-asked-questions', (req, res) => {
  res.render('frequently-asked-questions');
});

router.get('/contact-us', (req, res) => {
  res.render('contact-us');
});
export default router;



