const News = function() {
    this.data = data
    this.errors = []
}

News.prototype.validateUserInput = function() {
    if(this.data == "") {
        this.errors.push("Please entre the name of the city")
    }
}

module.exports = News