export default {
    getJson: (options) => {
        var xhr = new XMLHttpRequest()
        xhr.open("GET",options.url)
        xhr.send(null)
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200) {
                options.success(xhr.responseText)
            } else {
                options.error && options.error()
            }
        }
    }
}