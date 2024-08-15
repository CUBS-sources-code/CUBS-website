import Benefits from "@/components/Community/Benefits";
import CommunityHeader from "@/components/Community/CommunityHeader";
import MemberBox from "@/components/Community/MemberBox";
import OurMembers from "@/components/Community/OurMembers";
import ReviewFromUs from "@/components/Community/ReviewFromUs";

export default function CommunityPage() {
    return (
        <div>
            <CommunityHeader />
            <ReviewFromUs />
            <Benefits />
            <OurMembers />
            <MemberBox/>
        </div>
    )
}