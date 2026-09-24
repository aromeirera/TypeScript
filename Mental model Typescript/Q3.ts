// 1. **Task:** Define a discriminated union `Notification`:

// ```tsx
// type Notification = 
//   | { type: 'email'; to: string; subject: string; }
//   | { type: 'sms'; to: string; phone: string; }
//   | { type: 'push'; to: string; deviceId: string; };
// ```

// Write function `sendNotification(n: Notification): void` using `switch(n.type)`. For each case,
//  log a message including all relevant fields.

// // Add an `assertNever(x: never): never` helper, and call it in `default:` to enforce exhaustive 
// handling.
export
type Notification = 
            | { type: 'email'; to: string; subject: string; }
           | { type: 'sms'; to: string; phone: string; }
           | { type: 'push'; to: string; deviceId: string; };
           function sendNotification(n: Notification): void {
            switch (n.type) {
                case "email":
                    console.log(`Sent a message to ${n.to} with a subject saying ${n.subject}`)
                    break;
                case "sms":
                    console.log(`Send an SMS to ${n.to} with a number ${n.phone}`)
                    break;
                case "push":
                    console.log(`Sent a push to ${n.to} with a deviceId of ${n.deviceId} `)
                    break;    
                default:
                assertNever(n)
            }
           }
           function assertNever(x: never) {
            console.error("this is impossible")
           }
           