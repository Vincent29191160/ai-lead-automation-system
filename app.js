console.log("AI Lead Automation System running...");

function captureLead(name, email) {
    return {
        name,
        email,
        status: "captured",
        timestamp: new Date()
    };
}

console.log(captureLead("John Doe", "john@example.com"));
