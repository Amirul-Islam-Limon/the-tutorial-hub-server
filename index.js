const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');

app.use(cors());

const courseCategories = require('./data/course-categories.json');
const course = require('./data/course.json')


app.get('/', (req, res) => {
  res.send('Hello World!, Amirul Islam Limon')
})


app.get('/course-categories', (req, res) => {
  res.send(courseCategories);
})


app.get('/allCourses', (req, res) => {
  res.send(course);
})


app.get('/course-details/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find(singleCourse=> singleCourse._id === id);
  console.log(id);
  res.send(selectedCourse);
})


app.get('/course/:name/:id', (req, res)=>{
  const id = req.params.id;
  if(id == 8){
    res.send(course);
  }
  else{
    const matchedCourses = course.filter(course=> course.category_id === id);
    res.send(matchedCourses);
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})