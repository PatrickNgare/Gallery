var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
<<<<<<< HEAD
    test: 'mongodb+srv://<Patrickngare>:<Patel2023>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
=======
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
>>>>>>> test
}
module.exports = config;
