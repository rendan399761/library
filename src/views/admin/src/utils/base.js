const base = {
    get() {
        return {
            url : "http://localhost:8080/nodejsopeqc/",
            name: "nodejsopeqc",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nodejsopeqc/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于b/s架构的图书管理系统"
        } 
    }
}
export default base
