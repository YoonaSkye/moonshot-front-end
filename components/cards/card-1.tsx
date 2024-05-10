import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icon } from '../Icons';

const clipPath =
  'M31.9999 0.000756464L384 6.30388e-05C401.673 2.82235e-05 416 14.3269 416 32.0001L416 162.792C416 168.192 414.634 173.503 412.028 178.232L410.162 181.621C404.664 191.601 404.888 203.751 410.749 213.522L411.442 214.677C414.424 219.649 416 225.339 416 231.137L416 246C416 263.673 401.673 278 384 278L32 278C14.3269 278 4.94914e-05 263.673 1.97476e-05 246L-1.01193e-05 231.137C-4.0383e-05 225.339 1.57549 219.649 4.55816 214.677L5.25124 213.521C11.1121 203.751 11.3356 191.6 5.83807 181.621L3.97134 178.232C1.36614 173.503 -3.78811e-05 168.191 -3.76447e-05 162.792L-3.19186e-05 32.0008C-3.11449e-05 14.3277 14.3268 0.00079128 31.9999 0.000756464Z';

export function Card1() {
  return (
    <div className="relative">
      <Card
        className="border-none bg-[#131313] flex flex-col justify-center hover:translate-x-1 hover:-translate-y-1"
        style={{
          clipPath: `path("${clipPath}")`,
          width: '416px',
          height: '278px',
        }}
      >
        <CardHeader className="ml-3">
          <div className="w-[46px] h-1 bg-gradient-to-r from-[#38C1A5] to-[#0891D5]" />
        </CardHeader>
        <CardContent className="inline-flex flex-col items-start gap-4 w-[336px] p-0 mx-10">
          <CardTitle className="title">Introduction to programming</CardTitle>
          <Badge
            variant="outline"
            className="border-[#676767] shrink-0 px-2 py-1 banner"
          >
            Beginner
          </Badge>
          <CardDescription className="description">
            This course covers the most basic concepts in programming using
            Solidity as an example.
          </CardDescription>
        </CardContent>
        <CardFooter className="gap-5 justify-around mt-[75px] ml-3">
          <div className="flex justify-center items-center gap-2">
            <Icon name="clock" />
            <span className="icon">35 Hour</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Icon name="book" />
            <span className="icon">5 Course</span>
          </div>
          <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-[40px] bg-[#2A2A2A] tag">
            <Icon name="airplane" width={18} height={16} /> 45% completed
          </div>
        </CardFooter>
      </Card>
      <Card1Skeleton />
    </div>
  );
}

export function Card1Skeleton() {
  return (
    <svg
      className="absolute top-0 -z-10"
      xmlns="http://www.w3.org/2000/svg"
      width="416"
      height="279"
      viewBox="0 0 416 279"
      fill="none"
    >
      <path
        d="M32 0.000269201L384 -0.000425158C401.673 -0.00046002 416 14.3264 416 31.9996L416 163.026C416 168.42 414.637 173.725 412.037 178.451L410.141 181.897C404.656 191.868 404.879 204.003 410.727 213.766L411.451 214.975C414.428 219.944 416 225.627 416 231.419L416 246.365C416 264.038 401.673 278.365 384 278.365L32.0001 278.365C14.327 278.365 0.000171546 264.038 0.000141802 246.365L0.000111939 231.419C8.16747e-05 225.627 1.57219 219.944 4.54876 214.975L5.27291 213.766C11.1214 204.003 11.3445 191.868 5.85879 181.897L3.96288 178.451C1.36321 173.725 8.41792e-05 168.419 8.44154e-05 163.026L9.01517e-05 32.0003C9.09255e-05 14.3272 14.3269 0.000304063 32 0.000269201Z"
        fill="url(#paint0_linear_625_113)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_625_113"
          x1="416.051"
          y1="130.105"
          x2="0.0506935"
          y2="130.105"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#38C1A5" />
          <stop offset="1" stopColor="#0891D5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
