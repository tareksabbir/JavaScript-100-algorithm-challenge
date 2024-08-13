const payment = true

function enroll(payment, course) {
    if (payment) {
        course()
    } else {
        console.log('Please make payment first')
    }

}

function course(subject, callback) {
    console.log(`Your ${subject} course is processing...`)
    setTimeout(() => {
        console.log('course just finished!')
        callback(subject)

    }, 3000)
}

function collectCertificate(subject) {
    console.log(`congratulations! ${subject} here is your certificate!`)
}

enroll(payment, () => {
    course('data science', (subject) => {
        collectCertificate(subject)
    })
})


