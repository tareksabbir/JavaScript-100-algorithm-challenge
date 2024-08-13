const meeting = false

const meetingScheduled = new Promise((resolve, reject) => {
    if (!meeting) {
        const meetingDetails = {
            name: "tech meeting 2024",
            location: "google meet",
            time: "10:00 PM"
        }
        resolve(meetingDetails)

    } else {
        reject('meeting already scheduled')
    }
})


const fixedDateMeeting = (meetingDetails) => {

    const fixedMeeting = `topic: ${meetingDetails.name} the location is ${meetingDetails.location} at ${meetingDetails.time}`
    return Promise.resolve(fixedMeeting)
}

meetingScheduled
    .then(fixedDateMeeting)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })