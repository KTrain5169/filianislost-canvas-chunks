# WebSocket support

The frontend establishes a WebSocket connection to `wss://ws.filianislost.com`. This connection appears to not require authentication.

Once established, both the client and server periodically exchange binary messages with each other. The messages are encoded in [BSON](https://bsonspec.org/).
