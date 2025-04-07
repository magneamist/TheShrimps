export const ProfileIcon = ({
  stroke = "#000",
  size = "35",
  strokeWidth = "1.5",
}: {
  stroke?: string;
  size?: string;
  strokeWidth?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 35 35"
    fill="none"
    aria-label="Profile settings"
  >
    <path
      d="M16.7709 20.4337C13.7863 20.2949 10.7675 21.0094 8.13404 22.5774C6.07083 23.8059 0.66124 26.3144 3.95605 29.4535C5.56554 30.9868 7.35809 32.0834 9.61177 32.0834H17.5001"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.6042 9.47925C22.6042 13.1036 19.6661 16.0417 16.0417 16.0417C12.4174 16.0417 9.47925 13.1036 9.47925 9.47925C9.47925 5.85488 12.4174 2.91675 16.0417 2.91675C19.6661 2.91675 22.6042 5.85488 22.6042 9.47925Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <path
      d="M26.2501 30.2083V32.0833M26.2501 30.2083C24.5631 30.2083 23.0769 29.3796 22.2051 28.1214M26.2501 30.2083C27.9371 30.2083 29.4233 29.3796 30.2951 28.1214M22.2051 28.1214L20.4173 29.2707M22.2051 28.1214C21.6896 27.3772 21.389 26.4828 21.389 25.5208C21.389 24.5587 21.6894 23.6644 22.205 22.9204M30.2951 28.1214L32.0828 29.2707M30.2951 28.1214C30.8106 27.3772 31.1111 26.4828 31.1111 25.5208C31.1111 24.5587 30.8107 23.6644 30.2952 22.9204M26.2501 20.8332C27.9372 20.8332 29.4236 21.662 30.2952 22.9204M26.2501 20.8332C24.5629 20.8332 23.0766 21.662 22.205 22.9204M26.2501 20.8332V18.9583M30.2952 22.9204L32.0834 21.7708M22.205 22.9204L20.4167 21.7708"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export const HomeIcon = ({
  stroke = "#000",
  size = "35",
  strokeWidth = "1.5",
}: {
  stroke?: string;
  size?: string;
  strokeWidth?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 35 35"
    fill="none"
  >
    <path
      d="M13.125 32.0833L13.1278 26.2465C13.1284 24.8894 13.1288 24.2108 13.3505 23.6756C13.6467 22.9604 14.215 22.3923 14.9303 22.0965C15.4658 21.875 16.1443 21.875 17.5015 21.875C18.859 21.875 19.5379 21.875 20.0735 22.0967C20.789 22.3927 21.3573 22.961 21.6533 23.6765C21.875 24.2121 21.875 24.891 21.875 26.2485V32.0833"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <path
      d="M10.3374 6.94529L8.87902 8.08359C6.66722 9.81001 5.56132 10.6732 4.96816 11.8904C4.375 13.1075 4.375 14.5135 4.375 17.3255V20.3752C4.375 25.8945 4.375 28.6541 6.08354 30.3689C7.79209 32.0834 10.5419 32.0834 16.0417 32.0834H18.9583C24.458 32.0834 27.208 32.0834 28.9164 30.3689C30.625 28.6541 30.625 25.8945 30.625 20.3752V17.3255C30.625 14.5135 30.625 13.1075 30.0319 11.8904C29.4386 10.6732 28.3328 9.81001 26.1209 8.08359L24.6626 6.94529C21.2218 4.2596 19.5014 2.91675 17.5 2.91675C15.4986 2.91675 13.7781 4.2596 10.3374 6.94529Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

export const NewItemIcon = ({
  stroke = "#000",
  size = "35",
  strokeWidth = "1.5",
}: {
  stroke?: string;
  size?: string;
  strokeWidth?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 35 35"
    fill="none"
  >
    <path
      d="M17.5001 11.6667V23.3334M23.3334 17.5001H11.6667"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.64575 17.4999C3.64575 10.969 3.64575 7.70355 5.67464 5.67464C7.70355 3.64575 10.969 3.64575 17.4999 3.64575C24.0308 3.64575 27.2963 3.64575 29.3253 5.67464C31.3541 7.70355 31.3541 10.969 31.3541 17.4999C31.3541 24.0308 31.3541 27.2963 29.3253 29.3253C27.2963 31.3541 24.0308 31.3541 17.4999 31.3541C10.969 31.3541 7.70355 31.3541 5.67464 29.3253C3.64575 27.2963 3.64575 24.0308 3.64575 17.4999Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const CartIcon = ({
  stroke = "#000",
  size = "35",
  strokeWidth = "1.5",
}: {
  stroke?: string;
  size?: string;
  strokeWidth?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 35 35"
    fill="none"
  >
    <path
      d="M5.64788 24.82L3.89269 14.3497C3.6273 12.7667 3.49462 11.9751 3.91952 11.4563C4.34444 10.9375 5.12539 10.9375 6.68731 10.9375H28.3126C29.8745 10.9375 30.6554 10.9375 31.0804 11.4563C31.5052 11.9751 31.3725 12.7667 31.1072 14.3497L29.3519 24.82C28.7702 28.2904 28.4793 30.0255 27.2916 31.0545C26.1041 32.0833 24.392 32.0833 20.9681 32.0833H14.0317C10.6078 32.0833 8.8958 32.0833 7.70816 31.0545C6.52052 30.0255 6.22964 28.2904 5.64788 24.82Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <path
      d="M25.5209 10.9376C25.5209 6.50779 21.9299 2.91675 17.5001 2.91675C13.0703 2.91675 9.47925 6.50779 9.47925 10.9376"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const HeartIcon = ({
  stroke = "#000",
  size = "35",
  fill = "none",
  strokeWidth = "1.5",
}: {
  stroke?: string;
  size?: string;
  fill?: string;
  strokeWidth?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 35 35"
    fill={fill}
    aria-label="Add to favorites"
  >
    <path
      d="M28.383 5.8248C24.4722 3.42596 21.059 4.39266 19.0086 5.93252C18.1677 6.5639 17.7474 6.87959 17.5001 6.87959C17.2527 6.87959 16.8325 6.5639 15.9916 5.93252C13.9412 4.39266 10.5279 3.42596 6.61718 5.8248C1.48476 8.97304 0.323423 19.3592 12.1619 28.1216C14.4168 29.7905 15.5442 30.625 17.5001 30.625C19.456 30.625 20.5834 29.7905 22.8383 28.1216C34.6768 19.3592 33.5154 8.97304 28.383 5.8248Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export const StarIcon = ({
  stroke = "var(--yellow)",
  size = "24",
  fill = "none",
}: {
  stroke?: string;
  size?: string;
  strokeWidth?: string;
  fill?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    aria-label="Star rating"
  >
    <path
      d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const XIcon = ({
  stroke = "#000",
  size = "24",
}: {
  stroke?: string;
  size?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SearchIcon = ({
  stroke = "#000",
  size = "24",
}: {
  stroke?: string;
  size?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M17.5 17.5L22 22"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowIcon = ({
  stroke = "#000",
  direction = "left",
  size = "24",
}: {
  stroke?: string;
  direction?: "up" | "down" | "left" | "right";
  size?: string;
}) => {
  const directions: { [key: string]: number } = {
    down: 0,
    up: 180,
    right: -90,
    left: 90,
  };

  const rotation = directions[direction];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M17.9997 15C17.9997 15 13.5808 9.00001 11.9997 9C10.4186 8.99999 5.99976 15 5.99976 15"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GoBackArrowIcon = ({ stroke = "#000" }: { stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
  >
    <path
      d="M23.3334 5.83325C23.3334 5.83325 11.6668 14.4256 11.6667 17.4999C11.6667 20.5745 23.3334 29.1666 23.3334 29.1666"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
