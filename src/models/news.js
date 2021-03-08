const News = function(data) {
    this.data = data
    this.errors = []
}

News.prototype.validateUserInput = function() {
    if(this.data == "") {
        this.errors.push("Please enter a topic")
    }
}

module.exports = News