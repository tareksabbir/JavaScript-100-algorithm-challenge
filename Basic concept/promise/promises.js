const payment = true

const newCourse = new Promise((resolve, reject) => {
    if (!payment) {
        const courseDetails = {
            name: 'Data Science',
            Duration: "5 hr",
            payment: 5000,
            instructor: "Tarek Sabbir"
        }
        resolve(courseDetails)
    } else {
        reject("welcome to the course")
    }
    

})

newCourse
    .then((courseDetails) => {
        return console.log(JSON.stringify(courseDetails))
    })
    .catch((err) => {
        return console.log("From reject :",err)
    })
