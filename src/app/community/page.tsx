import Benefits from "@/components/Community/Benefits";
import CommunityHeader from "@/components/Community/CommunityHeader";
import MemberBox from "@/components/Community/MemberBox";
import OurMembers from "@/components/Community/OurMembers";

export default function CommunityPage() {
    return (
        <div>
            <CommunityHeader />
            <Benefits />
            <OurMembers />
            <MemberBox/>
        </div>
    )
}