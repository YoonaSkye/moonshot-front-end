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
  'M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z';

export function Card3() {
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
          <div className="w-[46px] h-1 bg-gradient-to-r from-[#D9E313] to-[#3CBC34]" />
        </CardHeader>
        <CardContent className="inline-flex flex-col items-start gap-4 w-[336px] p-0 mx-10">
          <CardTitle className="title">Web 3.0 Programming Basics</CardTitle>
          <Badge
            variant="outline"
            className="border-[#676767] shrink-0 px-2 py-1 banner"
          >
            Beginner
          </Badge>
          <CardDescription className="description">
            Basic concepts in programming of Solidity. Topics include:
            variables, functions, flow control, error handling, data structure.
          </CardDescription>
        </CardContent>
        <CardFooter className="gap-5 mt-[75px] ml-3">
          <div className="flex justify-center items-center gap-2">
            <Icon name="clock" />
            <span className="icon">35 Hour</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Icon name="book" />
            <span className="icon">5 Course</span>
          </div>
        </CardFooter>
      </Card>
      <Card3Skeleton />
    </div>
  );
}

export function Card3Skeleton() {
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
        d="M1.57233e-07 238.001L9.35541e-07 40.0001C1.02238e-06 17.9087 17.9086 5.94695e-05 40 5.75382e-05L229.45 4.0976e-05C238.544 4.0181e-05 247.367 3.09913 254.464 8.78632L283.573 32.1139C290.67 37.8011 299.493 40.9002 308.587 40.9002L376 40.9002C398.091 40.9002 416 58.8088 416 80.9002L416 238.001C416 260.092 398.091 278.001 376 278.001L40 278.001C17.9086 278.001 -1.56562e-06 260.092 1.57233e-07 238.001Z"
        fill="url(#paint0_linear_2_522)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_522"
          x1="208"
          y1="278.001"
          x2="208"
          y2="4.28512e-05"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9E313" />
          <stop offset="1" stopColor="#3CBC34" />
        </linearGradient>
      </defs>
    </svg>
  );
}
