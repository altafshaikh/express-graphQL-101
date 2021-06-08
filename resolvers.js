const { nanoid } = require("nanoid");

class Course {
  constructor(
    id,
    { courseName, category, price, language, email, stack, teachingAssists }
  ) {
    this.id = id;
    this.courseName = courseName;
    this.category = category;
    this.price = price;
    this.language = language;
    this.email = email;
    this.stack = stack;
    this.teachingAssists = teachingAssists;
  }
}

let courseHolder = {};

const resolvers = {
  getCourse: ({ id }) => {
    console.log(courseHolder);

    return new Course(id, courseHolder[id]);
  },
  createCourse: ({ input }) => {
    console.log(courseHolder);

    let id = nanoid();
    const course = new Course(id, input);
    courseHolder[id] = course;
    return course;
  },
};

module.exports = resolvers;
