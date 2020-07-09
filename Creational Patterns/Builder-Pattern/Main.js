const CourseBuilder = require('./CourseBuilder');

const course1 = new CourseBuilder('C Programming').makePaid(1000).makeCampaign().build();
const course2 = new CourseBuilder('JAVA').build();


course1.toPrint();
course2.toPrint();