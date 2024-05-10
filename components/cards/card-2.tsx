import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const clipPath =
  'M31.9997 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.358 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9995 278C14.3264 278 -0.000438855 263.673 -0.00040756 246L-0.0002202 149.369C-0.000189402 143.011 2.07803 136.828 5.91781 131.761C13.545 121.696 13.8249 107.865 6.61132 97.5L5.64263 96.1081C1.96902 90.8295 -0.000186828 84.5527 -0.000217063 78.1216L-0.00036762 32.0001C-0.000427877 14.3269 14.3265 0 31.9997 0Z';

export function Card2() {
  return (
    <div className="relative">
      <Card
        className="border-none bg-[#131313] flex flex-col hover:translate-x-1 hover:-translate-y-1"
        style={{
          clipPath: `path("${clipPath}")`,
          width: '416px',
          height: '278px',
        }}
      >
        <CardHeader className="p-0 ml-10 mt-9 mb-16">
          <CardTitle className="font-book text-base text-[#EDEDED]">
            Moonshot 2023 Summer Hackathon
          </CardTitle>
          <div className="flex items-center gap-4">
            <Badge
              variant="outline"
              className="border-[#676767] shrink-0 px-2 py-1 banner"
            >
              All Tracks
            </Badge>
            <Badge
              variant="outline"
              className="border-[#676767] shrink-0 px-2 py-1 banner"
            >
              Solidty
            </Badge>
            <Badge
              variant="outline"
              className="border-[#676767] shrink-0 px-2 py-1 banner"
            >
              Zk
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col px-0 ml-10 mr-[42px]">
          <div className="">
            <div className="flex justify-between description">
              <span>Signup</span>
              <span className="date">4/15 - 6/15</span>
            </div>
            <div className="w-[334px] border border-[#282828] mt-[5px]"></div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between description">
              <span>Event</span>
              <span className="date">5/15 - 7/15</span>
            </div>
            <div className="w-[334px] border border-[#282828] mt-[5px]"></div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between description">
              <span>Grant Size</span>
              <span className="date">200k</span>
            </div>
            <div className="w-[334px] border border-[#282828] mt-[5px]"></div>
          </div>
        </CardContent>
      </Card>
      <Card2Skeleton />
    </div>
  );
}

export function Card2Skeleton() {
  return (
    <svg
      className="absolute top-0 -z-10"
      xmlns="http://www.w3.org/2000/svg"
      width="416"
      height="278"
      viewBox="0 0 416 278"
      fill="none"
    >
      <path
        d="M32.0001 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.359 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9999 278C14.3268 278 -4.21268e-05 263.673 -1.08311e-05 246L0.000176529 149.369C0.000207326 143.011 2.07842 136.828 5.91821 131.761C13.5454 121.696 13.8253 107.865 6.61172 97.5L5.64303 96.1081C1.96942 90.8295 0.0002099 84.5527 0.000179666 78.1216L2.91086e-05 32.0001C-3.11484e-05 14.3269 14.3269 0 32.0001 0Z"
        fill="url(#paint0_linear_2_488)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_488"
          x1="208"
          y1="278"
          x2="208"
          y2="-7.12466e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#719BFF" />
          <stop offset="0.770833" stopColor="#DA8AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
