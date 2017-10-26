import { CommunityService } from "app/shared/service/community.service";
import { DetailsCommunityService } from "app/details/shared/details-community.service";

export const communityServiceFactory = () => {
    
    return new CommunityService();
    // let id=true
    // console.log("Number "+ n.toString());
    // if(n == 10){
    //     return new CommunityService(n);
    // }else{
    //     return new DetailsCommunityService();
    // }
    
}