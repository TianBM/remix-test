import AV from 'leancloud-storage';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LeanCloud = ()=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let instance: any = null;

    function getInstance(){
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

    return getInstance();
};

export default LeanCloud();