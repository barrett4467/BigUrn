const app = function() {
    this.el = document.querySelector(".prior-post-bucket");
    this.priorPosts = ["Testing blog post 1. This is an example that is hard coded"];

    this.FetchAll = function() {
        if(this.priorPosts.length > 0){
            for( i=0; i < this.priorPosts.length; i++){
                data += "<tr>"
                data += `"<td>" ${this.priorPosts[i]} "</td>`
                data += "</tr>"
            }
            return this.el.innerHTML = data;
        }
    }
}