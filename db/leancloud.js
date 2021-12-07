const AV = require('leancloud-storage');

var LeanCloud = ()=>{
    var instance = null;

    function init(){
        if(!instance){

            AV.init({
            appId: "Fsohqfee4uQOrjNAp9SFCnOd-gzGzoHsz",
            appKey: "f58gMxLEuHyf4RA0y0HHnqID",
            serverURL: "https://leanapi.dakaijiu.cn"
            });
        
            AV.debug.enable();

            instance = AV;
        }

        return instance;
    }

    return init();
}

export default LeanCloud();