"use client";
import * as React from 'react';
import { easeInOut, motion, SVGMotionProps } from 'framer-motion';

const SolarSystemSvg = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    viewBox="0 0 1348 464"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="solar-system">
      <mask
        id="mask0_3_8"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={1348}
        height={464}
      >
        <rect
          id="solar-mask"
          width={1348}
          height={464}
          rx={20}
          fill="#153254"
        />
      </mask>
      <g mask="url(#mask0_3_8)">
        <rect id="pane" width={1348} height={464} rx={20} fill="#153254" />
        <g id="sun">
          <path
            id="sun-corona"
            d="M228 286C228 289.518 239.647 300.518 239.5 304C239.287 309.041 227.198 306.543 226.684 311.5C225.982 318.252 231.741 326.423 230.5 333C229.611 337.716 221.851 340.884 220.694 345.5C219.553 350.052 231.892 362.053 230.5 366.5C229.009 371.26 213.769 368.457 212 373.087C210.331 377.453 213.908 384.759 212 389C209.708 394.095 201.879 396.098 199.254 401C197.444 404.382 204.463 412.716 202.5 416C200.681 419.044 189.89 417.044 187.944 420C185.253 424.087 187.925 440.589 185 444.5C182.455 447.903 174.34 438.738 171.625 442C169.074 445.064 179.195 452.065 176.5 455C173.838 457.899 158.361 456.733 155.563 459.5C153.152 461.884 150.692 464.218 148.185 466.5C104.839 505.951 47.2281 530 -16 530C-150.757 530 -260 420.757 -260 286C-260 151.243 -150.757 42 -16 42C-13.155 42 -10.8214 32.4034 -8 32.5C-3.46753 32.6552 1.53357 42.5792 6 42.9784C9.52206 43.2931 14.5226 35.5372 18 36C22.2014 36.5592 24.869 45.3708 29 46.141C33.5456 46.9885 39.0468 43.4042 43.5 44.5C46.8613 45.3271 49.1952 50.7816 52.5 51.7464C55.864 52.7285 66.6979 43.3787 70 44.5C74.9053 46.1657 72.2405 58.3856 77 60.3493C84.1786 63.3111 90.185 61.3922 97 65C102.634 67.9829 109.138 76.3933 114.5 79.7938C117.203 81.5081 123.87 76.1837 126.5 78C129.551 80.1073 128.552 89.3727 131.5 91.6132C135.428 94.5986 145.263 95.287 149 98.5C152.598 101.594 150.105 107.204 153.517 110.5C156.59 113.469 164.086 108.374 167 111.5C169.739 114.438 167.907 125.588 170.5 128.659C174.282 133.137 179.543 129.254 183 134C185.384 137.273 186.051 149.107 188.273 152.5C191.052 156.743 201.984 146.579 204.5 151C206.462 154.448 200.061 172.449 201.857 176C204.177 180.585 212.376 179.254 214.409 184C216.585 189.08 212.574 200.249 214.409 205.5C215.847 209.617 225.463 213.785 226.684 218C227.925 222.286 220.767 226.62 221.776 231C222.802 235.455 233.221 237.956 234 242.5C234.624 246.14 225.652 251.807 226.112 255.5C226.771 260.783 233.685 266.118 234 271.5C234.281 276.297 228 281.132 228 286Z"
            fill="#FF9A13"
          />
          <circle
            id="sun-ring"
            cx={-15.5}
            cy={285.5}
            r={236.5}
            fill="#153254"
          />
          <circle id="sun-ellipse" cx={-16} cy={286} r={231} fill="#FF9A13" />
        </g>
        <path
          id="orbit2"
          d="M537.078 -27.0853C740.581 122.372 759.764 261.341 708.523 562.584"
          stroke="#F0EEF0"
          strokeOpacity={0.5}
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
        <path
          id="orbit3"
          d="M759.425 -54.4956C857.041 178.361 801.995 307.398 603.076 539.355"
          stroke="#F0EEF0"
          strokeOpacity={0.5}
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
        <path
          id="orbit4"
          d="M997.967 -56.0741C1123.11 163.218 1084.13 297.98 914.828 552.359"
          stroke="#F0EEF0"
          strokeOpacity={0.5}
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
        <path
          id="orbit5"
          d="M957.181 -6.64561C1179.17 113.648 1217.14 248.7 1207.48 554.117"
          stroke="#F0EEF0"
          strokeOpacity={0.5}
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
        <path
          id="orbit6"
          d="M233.803 -36.1081C415.378 139.339 415.714 279.625 324.459 571.251"
          stroke="#F0EEF0"
          strokeOpacity={0.5}
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
        <path
          id="orbit7"
          d="M383.803 -36.1081C737 244 346 210 474.459 571.251"
          stroke="#F0EEF0"
          strokeOpacity={0.5}
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
        <g id="mercury">
          <circle
            id="mercury-ellipse"
            cx={308.5}
            cy={294.5}
            r={20.5}
            fill="#FF9A13"
          />
          <path
            id="mercury-patches"
            d="M329 294.5C329 305.822 319.822 315 308.5 315C297.178 315 288 305.822 288 294.5C288 291.072 295.012 294.84 296.5 292C299.905 285.5 303.188 298.399 306 296.5C309.272 294.29 302.755 288 307 288C313.5 288 305 277 312 278C319.5 278 319.723 284.005 322 286C323.899 287.663 325.489 282.744 326.671 285C328.158 287.84 329 291.072 329 294.5Z"
            fill="#F25601"
          />
          <circle
            id="mercury-spot1"
            cx={316.5}
            cy={290.5}
            r={2.5}
            fill="#FF9A13"
          />
          <circle
            id="mercury-spot2"
            cx={304.5}
            cy={304.5}
            r={4.5}
            fill="#FF9A13"
          />
        </g>
        <g id="venus">
          <circle id="venus-ellipse" cx={364} cy={146} r={40} fill="#FF9A13" />
          <path
            id="venus-spot1"
            d="M404 146C404 168.091 376.091 149.5 354 149.5C347.921 149.5 352.159 184.644 347 182.218C333.409 175.828 365 182.5 365 154C340.5 141.5 396.5 224.5 395 120.72C400.626 127.61 404 136.411 404 146Z"
            fill="#F25601"
          />
          <path
            id="venus-spot2"
            d="M324 146C324 142.185 324.534 138.495 325.532 135C331.175 136.329 336.705 126.026 341 126.5C347.798 127.25 352.385 143.934 355 140.5C357.37 137.388 356.835 127.506 355 119C354.365 116.058 354.308 111.237 353.111 107.5C356.573 106.523 360.225 106 364 106C365.134 110.457 388.113 122.94 388.5 126.5C389.585 136.48 361.908 128 355 137.5C351.397 142.455 349.337 119.813 343.5 120.5C329.5 120.5 327.042 145.131 324 146Z"
            fill="#F25601"
          />
        </g>
        <motion.g
          id="earth"
          animate={{
            rotate: [0, 360, 0],
          }}
          transition={{
            times: [0, 1],
            duration: 10,
            repeat: Infinity,
            type: 'keyframes',
            ease: easeInOut,
          }}
        >
          <path
            id="earth-button"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M571.468 182.416C587.283 208.051 579.322 241.653 553.687 257.468C528.053 273.282 494.451 265.322 478.636 239.687C462.821 214.052 470.782 180.45 496.416 164.636C522.05 148.821 555.653 156.781 571.468 182.416ZM521.905 192.967C524.08 196.492 522.985 201.112 519.46 203.287C515.935 205.462 511.315 204.367 509.141 200.842C506.966 197.317 508.06 192.697 511.585 190.522C515.111 188.347 519.73 189.442 521.905 192.967ZM543.852 209.065C547.377 206.89 548.471 202.271 546.297 198.746C544.122 195.221 539.502 194.126 535.977 196.301C532.452 198.476 531.358 203.096 533.532 206.621C535.707 210.145 540.327 211.24 543.852 209.065ZM516.126 217.359C518.301 220.884 517.207 225.504 513.682 227.678C510.156 229.853 505.537 228.759 503.362 225.234C501.187 221.709 502.281 217.089 505.807 214.914C509.332 212.739 513.952 213.834 516.126 217.359ZM536.642 231.136C540.167 228.961 541.261 224.342 539.086 220.817C536.912 217.292 532.292 216.197 528.767 218.372C525.241 220.547 524.147 225.167 526.322 228.692C528.497 232.216 533.116 233.311 536.642 231.136Z"
            fill="#FEBE1E"
          />
          <path
            id="earth-stroke-o"
            d="M552.613 255.727C577.287 240.505 584.949 208.163 569.727 183.49C554.505 158.816 522.163 151.154 497.49 166.376C472.816 181.598 465.154 213.94 480.376 238.613C495.598 263.287 527.94 270.949 552.613 255.727Z"
            stroke="#F25601"
            strokeWidth={3}
          />
          <path
            id="earth-curv1"
            d="M519.189 200.25C519.189 200.25 512.068 199.035 513.696 200.435C525.419 209.223 529.532 223.507 529.532 223.507C529.532 223.507 531.766 224.532 532.433 221.717C526.792 209.978 519.189 200.25 519.189 200.25Z"
            fill="#F25601"
          />
          <path
            id="earth-curv2"
            d="M513.679 214.511C513.679 214.511 512.406 221.622 513.818 220.005C522.702 208.355 537.021 204.36 537.021 204.36C537.021 204.36 538.063 202.134 535.254 201.444C523.469 206.988 513.679 214.511 513.679 214.511Z"
            fill="#F25601"
          />
        </motion.g>
        <g id="mars">
          <circle id="mars-ellipse" cx={640} cy={67} r={40} fill="#F25601" />
          <g id="mars-patch1">
            <path
              d="M608 60.5C608 60.5 609.5 44 625 44.5C640.5 45 658.5 39 658.5 39C658.5 39 648.5 47.5 642 49C635.5 50.5 627 42.9543 619 50.5L628 67C652.222 61.1397 657.213 54.3637 658.237 51.6809C658.433 50.9472 658.5 50.5 658.5 50.5C658.5 50.5 658.524 50.9302 658.237 51.6809C657.508 54.4165 654.991 61.1344 647.5 63.5C638 66.5 628 67 628 67L619 50.5C611 58.0457 608 60.5 608 60.5Z"
              fill="#FEBE1E"
            />
            <path
              d="M652 84C644.5 90 622.5 87 622.5 87C622.5 87 652.5 93 657 88C661.5 83 661 77.8749 665 67C669 56.1251 674.5 63.5 674.5 63.5C674.5 63.5 669 50.5 665 58.5C661 66.5 659.5 78 652 84Z"
              fill="#FEBE1E"
            />
          </g>
          <circle
            id="mars-patch2"
            cx={614.5}
            cy={70.5}
            r={6.5}
            fill="#FF9A13"
          />
          <circle id="mars-patch3" cx={641} cy={80} r={4} fill="#FF9A13" />
        </g>
        <g id="jupiter">
          <path
            id="jupiter-body"
            d="M697 246.5C697 198.184 736.184 159 784.5 159C832.816 159 872 198.184 872 246.5C872 294.816 832.816 334 784.5 334C736.184 334 697 294.816 697 246.5Z"
            fill="#EDD69F"
          />
          <path
            id="jupiter-rings"
            d="M859.569 200.94L861.665 204.398C864.366 209.385 866.583 214.612 868.316 220.121L868.517 220.926L868.195 221.167L867.147 221.851L866.099 222.534L865.051 223.178L864.003 223.821L862.955 224.464L861.907 225.068L860.859 225.671L859.811 226.274L858.722 226.877L857.634 227.44L856.545 228.003L855.457 228.566L854.369 229.129L853.28 229.652L852.192 230.175L851.104 230.697L849.975 231.22L848.846 231.703L847.718 232.185L846.589 232.668L845.46 233.11L844.332 233.552L843.203 233.995L842.074 234.437L840.946 234.839L839.817 235.241L838.688 235.644L837.519 236.046L836.35 236.408L835.181 236.769L834.012 237.131L832.843 237.453L831.674 237.775L830.505 238.096L829.336 238.418L828.167 238.7L826.999 238.981L825.83 239.263L824.661 239.504L823.492 239.745L822.282 239.986L821.073 240.228L819.864 240.429L818.654 240.63L817.445 240.831L816.236 241.032L815.027 241.193L813.817 241.354L812.608 241.515L811.399 241.635L810.189 241.756L808.98 241.876L807.771 241.997L806.562 242.078L805.352 242.158L804.143 242.238L802.934 242.279L801.724 242.319L800.515 242.359L799.306 242.399H795.678L794.469 242.359L793.259 242.319L792.05 242.279L790.841 242.198L789.631 242.118L788.422 242.037L787.213 241.957L786.004 241.836L784.794 241.716L783.585 241.595L782.376 241.434L781.166 241.273L779.957 241.112L778.748 240.952L777.539 240.751L776.329 240.549L775.12 240.348L773.911 240.107L772.701 239.866L771.492 239.625L770.283 239.343L769.074 239.062L767.864 238.78L765.486 238.177L762.342 236.769L759.883 234.558L758.23 231.703L757.505 228.445L757.827 225.027L759.238 221.891L761.455 219.438L764.277 217.789L767.502 217.065L770.928 217.387L772.984 217.91L773.991 218.151L774.999 218.392L776.007 218.593L777.015 218.794L778.022 218.995L779.03 219.197L780.038 219.357L781.046 219.518L782.053 219.679L783.061 219.84L784.069 219.961L785.077 220.081L786.084 220.202L787.092 220.322L788.1 220.403L789.107 220.483L790.115 220.564L791.123 220.644L792.131 220.684L793.138 220.725L794.146 220.765L795.154 220.805H800.193L801.2 220.765L802.208 220.725L803.216 220.684L804.224 220.644L805.231 220.564L806.239 220.483L807.247 220.403L808.255 220.322L809.262 220.202L810.27 220.081L811.278 219.961L812.285 219.84L813.293 219.679L814.301 219.518L815.309 219.357L816.316 219.197L817.324 219.036L818.332 218.835L819.34 218.634L820.307 218.432L821.275 218.231L822.242 217.99L823.209 217.749L824.177 217.508L825.144 217.266L826.112 216.985L827.079 216.703L828.047 216.422L829.014 216.14L829.981 215.819L830.949 215.497L831.916 215.175L832.884 214.854L833.851 214.532L834.819 214.17L835.746 213.808L836.673 213.446L837.6 213.084L838.527 212.682L839.454 212.28L840.381 211.878L841.308 211.476L842.236 211.074L843.163 210.631L844.09 210.189L845.017 209.747L845.944 209.304L846.831 208.822L847.718 208.339L848.604 207.857L849.491 207.374L850.378 206.891L851.265 206.369L852.152 205.846L853.039 205.323L853.925 204.8L854.772 204.237L855.618 203.674L856.465 203.111L857.311 202.548L858.158 201.985L859.004 201.382L859.569 200.94ZM697.443 235.563L698.33 235.764L701.273 237.574L702.885 238.941L703.691 239.584L704.498 240.228L705.304 240.871L706.11 241.515L706.916 242.118L707.722 242.721L708.569 243.324L709.415 243.927L710.262 244.531L711.108 245.093L711.955 245.656L712.801 246.219L713.648 246.782L714.494 247.345L715.381 247.868L716.268 248.391L717.155 248.914L718.042 249.436L718.928 249.919L719.815 250.402L720.702 250.884L721.589 251.367L722.476 251.849L723.362 252.292L724.29 252.734L725.217 253.176L726.144 253.619L727.071 254.021L727.998 254.423L728.925 254.825L729.852 255.227L730.779 255.629L731.707 255.991L732.634 256.353L733.561 256.715L734.528 257.077L735.496 257.399L736.463 257.72L737.431 258.042L738.398 258.364L739.365 258.685L740.333 258.967L741.3 259.248L742.268 259.53L743.235 259.811L744.203 260.053L745.17 260.294L746.137 260.535L747.105 260.776L748.072 260.978L749.04 261.179L750.047 261.38L751.055 261.581L752.063 261.782L753.071 261.943L754.078 262.103L755.086 262.264L756.094 262.425L757.102 262.546L758.109 262.666L759.117 262.787L760.125 262.908L761.133 262.988L762.14 263.069L763.148 263.149L764.156 263.229L765.164 263.27L766.171 263.31L767.179 263.35L768.187 263.39H773.225L774.233 263.35L775.241 263.31L776.249 263.27L777.256 263.229L778.264 263.149L779.272 263.069L780.28 262.988L781.287 262.908L782.295 262.787L783.303 262.666L784.311 262.546L785.318 262.425L786.326 262.264L787.334 262.103L788.342 261.943L789.349 261.782L790.357 261.581L791.365 261.38L792.373 261.179L793.38 260.978L794.388 260.736L795.396 260.495L796.363 260.254L798.097 259.972H799.79L801.442 260.213L803.014 260.736L804.506 261.46L805.836 262.425L807.045 263.591L808.053 264.918L808.859 266.406L809.424 268.055L809.706 269.784V271.473L809.464 273.122L808.94 274.69L808.214 276.178L807.247 277.505L806.078 278.711L804.748 279.717L803.256 280.521L801.603 281.084L800.354 281.406L799.145 281.687L797.935 281.969L796.726 282.21L795.517 282.451L794.307 282.692L793.098 282.934L791.889 283.135L790.68 283.336L789.47 283.537L788.261 283.698L787.052 283.859L785.842 284.019L784.633 284.14L783.424 284.261L782.215 284.381L781.005 284.502L779.796 284.582L778.587 284.663L777.377 284.743L776.168 284.783L774.959 284.824L773.75 284.864L772.54 284.904H768.912L767.703 284.864L766.494 284.824L765.284 284.783L764.075 284.743L762.866 284.663L761.657 284.582L760.447 284.502L759.238 284.381L758.029 284.261L756.819 284.14L755.61 284.019L754.401 283.859L753.192 283.698L751.982 283.537L750.773 283.336L749.564 283.135L748.354 282.934L747.145 282.733L745.936 282.491L744.767 282.25L743.598 282.009L742.429 281.727L741.26 281.446L740.091 281.164L738.922 280.883L737.753 280.561L736.584 280.239L735.415 279.918L734.246 279.556L733.077 279.194L731.908 278.832L730.739 278.47L729.57 278.068L728.441 277.666L727.313 277.264L726.184 276.862L725.055 276.419L723.927 275.977L722.798 275.535L721.669 275.052L720.541 274.569L719.412 274.087L718.283 273.604L717.195 273.082L716.107 272.559L715.018 272.036L713.93 271.513L712.842 270.95L711.753 270.387L710.665 269.824L709.577 269.261L708.488 268.658L707.44 268.055L706.392 267.452L705.344 266.849L704.296 266.205L703.248 265.562L702.2 264.918L701.152 264.235L700.144 263.551L699.136 262.868L698.572 262.465L697.443 255.026C697.161 252.09 697 249.115 697 246.099C697 243.083 697.161 240.107 697.443 237.172V235.563ZM859.77 290.574L857.15 294.917C847.718 308.871 834.295 319.97 818.574 326.605L814.18 328.213L813.898 328.253L812.689 328.374L811.479 328.454L810.27 328.535L809.061 328.615L807.851 328.655L806.642 328.696L805.433 328.736L804.224 328.776H800.596L799.386 328.736L798.177 328.696L796.968 328.655L795.759 328.615L794.549 328.535L793.34 328.454L792.131 328.374L790.921 328.253L789.712 328.133L788.503 328.012L787.294 327.891L786.084 327.731L784.875 327.57L783.666 327.409L782.456 327.208L781.247 327.007L780.038 326.806L778.829 326.564L777.619 326.323L776.41 326.082L775.201 325.841L773.991 325.559L772.782 325.278L771.573 324.996L770.363 324.674L769.154 324.353L767.945 324.031L766.776 323.709L765.607 323.347L764.438 322.985L763.269 322.624L762.1 322.221L760.931 321.819L759.762 321.417L758.593 321.015L756.295 320.171L753.313 318.441L751.136 315.948L749.806 312.932L749.443 309.635L750.168 306.297L751.902 303.321L754.401 301.15L757.424 299.823L760.73 299.461L764.075 300.185L766.05 300.949L767.018 301.311L767.985 301.633L768.953 301.954L769.92 302.276L770.888 302.598L771.855 302.879L772.822 303.161L773.79 303.442L774.798 303.724L775.805 303.965L776.813 304.206L777.821 304.447L778.829 304.689L779.836 304.93L780.844 305.131L781.852 305.332L782.859 305.533L783.867 305.734L784.875 305.895L785.883 306.056L786.89 306.217L787.898 306.378L788.906 306.498L789.914 306.619L790.921 306.74L791.929 306.86L792.937 306.941L793.945 307.021L794.952 307.101L795.96 307.182L796.968 307.222L797.976 307.262L798.983 307.303L799.991 307.343H805.03L806.038 307.303L807.045 307.262L808.053 307.222L809.061 307.182L810.068 307.101L811.076 307.021L812.084 306.941L813.092 306.86L814.099 306.74L815.107 306.619L816.115 306.498L817.123 306.378L818.13 306.217L819.138 306.056L820.146 305.895L821.154 305.734L822.161 305.533L823.169 305.332L824.177 305.131L825.185 304.93L826.152 304.729L827.119 304.488L828.087 304.246L829.054 304.005L830.022 303.764L830.989 303.482L831.957 303.201L832.924 302.919L833.891 302.638L834.859 302.316L835.826 301.994L836.794 301.673L837.761 301.351L838.729 301.029L839.696 300.667L840.663 300.306L841.591 299.944L842.518 299.582L843.445 299.18L844.372 298.777L845.299 298.375L846.226 297.973L847.153 297.531L848.08 297.089L849.008 296.646L849.935 296.204L850.862 295.761L851.789 295.279L852.716 294.796L853.603 294.314L854.49 293.831L855.376 293.309L856.263 292.786L857.15 292.263L858.037 291.74L858.924 291.177L859.77 290.574ZM807.086 161.612L810.472 162.497C818.695 165.07 826.434 168.77 833.408 173.515L833.811 173.837L832.964 174.279L831.836 174.842L830.707 175.365L829.578 175.887L828.45 176.41L827.321 176.933L826.192 177.416L825.064 177.898L823.935 178.381L822.806 178.823L821.637 179.265L820.468 179.708L819.299 180.15L818.13 180.552L816.961 180.954L815.792 181.356L814.623 181.718L813.454 182.08L812.285 182.442L811.117 182.804L809.948 183.126L808.779 183.447L807.61 183.769L806.441 184.051L805.272 184.332L804.103 184.614L802.893 184.895L801.684 185.136L800.475 185.378L799.265 185.619L798.056 185.82L796.847 186.021L795.638 186.222L794.428 186.423L793.219 186.584L792.01 186.745L790.8 186.906L789.591 187.026L788.382 187.147L787.173 187.268L785.963 187.388L784.754 187.469L783.545 187.549L782.335 187.63L781.126 187.67L779.917 187.71L778.708 187.75L777.498 187.79H773.87L772.661 187.75L771.452 187.71L770.243 187.67L769.033 187.63L767.824 187.549L766.615 187.469L765.405 187.388L764.196 187.268L762.987 187.147L761.778 187.026L760.568 186.906L759.359 186.745L758.15 186.584L756.94 186.423L755.731 186.222L754.522 186.021L753.313 185.82L752.103 185.619L750.894 185.378L749.685 185.136L748.475 184.895L747.266 184.614L746.057 184.332L744.888 184.051L743.719 183.769L742.55 183.447L741.381 183.126L740.212 182.804L739.043 182.442L737.874 182.08L736.705 181.718L735.536 181.356L734.367 180.954L733.198 180.552L732.029 180.15L730.86 179.708L729.691 179.265L728.522 178.823L728.2 178.702L728.482 178.461C734.972 173.113 742.268 168.689 750.128 165.352L753.675 164.065L754.078 164.145L755.086 164.346L756.094 164.547L757.102 164.708L758.109 164.869L759.117 165.03L760.125 165.191L761.133 165.352L762.14 165.472L763.148 165.593L764.156 165.714L765.164 165.834L766.171 165.915L767.179 165.995L768.187 166.076L769.195 166.156L770.202 166.196L771.21 166.236L772.218 166.277L773.225 166.317H777.256L778.264 166.277L779.272 166.236L780.28 166.196L781.287 166.156L782.295 166.116L783.303 166.035L784.311 165.955L785.318 165.874L786.326 165.794L787.334 165.673L788.342 165.553L789.349 165.432L790.357 165.311L791.365 165.151L792.373 164.99L793.38 164.829L794.388 164.668L795.396 164.467L796.403 164.266L797.411 164.065L798.419 163.864L799.427 163.623L800.434 163.381L801.402 163.14L802.369 162.899L803.337 162.657L804.304 162.376L805.272 162.094L806.239 161.813L807.086 161.612Z"
            fill="#FF9A13"
          />
        </g>
        <g id="saturn">
          <path
            id="saturn-ring1"
            d="M1085.83 323.685C1085.62 323.176 1084.02 322.299 1079.66 322.299C1076.96 322.299 1073.2 322.635 1068.06 323.607C1056.36 325.816 1041.49 330.521 1026.2 336.854C1010.92 343.186 997.078 350.37 987.242 357.085C975.951 364.79 974.387 368.881 974.729 369.707C975.254 370.981 980.658 372.088 993.122 369.668C992.759 369.083 992.41 368.489 992.075 367.887C992.064 367.866 992.051 367.844 992.04 367.823C991.899 367.57 991.762 367.315 991.627 367.059C991.603 367.015 991.58 366.971 991.557 366.926C991.43 366.685 991.306 366.442 991.184 366.198C991.154 366.139 991.125 366.079 991.095 366.019C990.979 365.785 990.865 365.55 990.753 365.313C990.72 365.243 990.688 365.172 990.655 365.102C990.548 364.872 990.442 364.642 990.339 364.41C990.304 364.332 990.271 364.254 990.236 364.176C990.137 363.947 990.037 363.718 989.941 363.488C989.94 363.486 989.94 363.484 989.939 363.482C991.613 360.361 1000.23 354.786 1012.39 348.809C1017.18 346.455 1022.52 344.038 1028.2 341.684C1048.31 333.355 1065.95 328.614 1070.67 330.04C1071.55 332.168 1072.27 334.379 1072.8 336.659C1083.32 329.556 1086.36 324.953 1085.83 323.685Z"
            fill="#F25601"
          />
          <path
            id="saturn-body1"
            d="M1073.95 347.557C1073.96 347.266 1073.96 346.976 1073.96 346.684C1073.96 346.446 1073.95 346.21 1073.95 345.972C1073.95 345.974 1073.94 345.977 1073.94 345.979C1073.92 345.037 1073.88 344.104 1073.8 343.18C1073.8 343.176 1073.81 343.174 1073.81 343.171C1073.63 340.955 1073.28 338.786 1072.78 336.677C1072.78 336.671 1072.79 336.664 1072.8 336.658C1072.27 334.377 1071.55 332.166 1070.67 330.039C1065.95 328.613 1048.31 333.354 1028.2 341.683C1022.52 344.037 1017.18 346.453 1012.39 348.808C1011.71 351.875 1011.35 355.062 1011.35 358.333C1011.35 370.822 1016.6 382.079 1025 390.04C1017.39 389.124 1010.39 386.253 1004.51 381.949C1004.5 381.95 1004.5 381.951 1004.5 381.952C1011.72 387.243 1020.63 390.369 1030.28 390.369C1052.12 390.369 1070.22 374.334 1073.45 353.393C1073.43 353.405 1073.41 353.418 1073.39 353.43C1073.69 351.506 1073.9 349.553 1073.95 347.557Z"
            fill="#FEBE1E"
          />
          <path
            id="saturn-body2"
            d="M1011.35 358.334C1011.35 355.062 1011.71 351.875 1012.39 348.809C1000.23 354.785 991.613 360.36 989.939 363.481C989.94 363.483 989.941 363.485 989.942 363.487C990.038 363.718 990.137 363.946 990.237 364.175C990.271 364.253 990.305 364.331 990.34 364.409C990.443 364.641 990.548 364.872 990.655 365.101C990.688 365.172 990.721 365.242 990.754 365.312C990.866 365.549 990.98 365.784 991.096 366.018C991.125 366.078 991.155 366.138 991.185 366.198C991.307 366.441 991.431 366.684 991.557 366.925C991.58 366.97 991.604 367.014 991.627 367.058C991.763 367.314 991.9 367.569 992.04 367.822C992.052 367.844 992.064 367.865 992.076 367.886C992.412 368.489 992.762 369.082 993.125 369.667C993.14 369.664 993.155 369.661 993.171 369.658C994.316 371.505 995.596 373.258 996.995 374.907C997.012 374.904 997.03 374.9 997.048 374.896C997.646 375.6 998.251 376.294 998.891 376.958C998.879 376.961 998.868 376.963 998.855 376.966C1000.6 378.781 1002.51 380.447 1004.54 381.941C1004.53 381.944 1004.52 381.946 1004.51 381.949C1010.39 386.253 1017.4 389.123 1025 390.04C1016.6 382.079 1011.35 370.823 1011.35 358.334Z"
            fill="#FEBE1E"
          />
          <path
            id="saturn-body3"
            d="M1056.03 311.409C1051.81 308.323 1047.02 305.971 1041.85 304.551C1041.83 304.547 1041.82 304.544 1041.8 304.54C1041.49 304.454 1041.17 304.372 1040.86 304.293C1040.82 304.284 1040.78 304.274 1040.75 304.265C1040.45 304.193 1040.15 304.123 1039.86 304.056C1039.8 304.043 1039.74 304.03 1039.68 304.017C1039.4 303.956 1039.12 303.897 1038.84 303.841C1038.76 303.825 1038.68 303.81 1038.6 303.795C1038.34 303.744 1038.07 303.695 1037.81 303.65C1037.71 303.632 1037.61 303.616 1037.5 303.599C1037.26 303.558 1037.01 303.518 1036.77 303.481C1036.65 303.463 1036.52 303.447 1036.4 303.43C1036.17 303.398 1035.94 303.365 1035.71 303.336C1035.57 303.319 1035.43 303.304 1035.29 303.288C1035.07 303.263 1034.86 303.238 1034.65 303.217C1034.48 303.201 1034.32 303.188 1034.15 303.173C1033.96 303.156 1033.76 303.137 1033.57 303.123C1033.38 303.109 1033.19 303.099 1033 303.087C1032.83 303.076 1032.65 303.064 1032.48 303.055C1032.25 303.044 1032.02 303.037 1031.79 303.029C1031.66 303.025 1031.52 303.018 1031.38 303.014C1031.02 303.005 1030.65 303 1030.28 303C1008.42 303 990.321 319.044 987.101 339.994C997.254 333.866 1008.85 328.076 1020.56 323.226C1032.75 318.176 1044.85 314.159 1056.03 311.409Z"
            fill="#FEBE1E"
          />
          <path
            id="saturn-ring2"
            d="M1105.82 315.395V315.393C1102.98 308.54 1092.54 305.919 1075.62 307.8C1069.59 308.472 1063 309.694 1056.04 311.405C1056.04 311.407 1056.03 311.408 1056.03 311.409C1044.85 314.159 1032.75 318.175 1020.56 323.225C1008.85 328.075 997.254 333.865 987.101 339.994C965.503 353.032 950.439 367.61 954.733 377.976C956.977 383.389 964.263 386.141 975.407 386.141C983.303 386.141 993.151 384.746 1004.5 381.952C1004.5 381.951 1004.5 381.951 1004.51 381.95C1004.52 381.947 1004.53 381.944 1004.54 381.941C1002.5 380.448 1000.6 378.782 998.855 376.966C990.629 378.777 983.357 379.73 977.565 379.73C969.937 379.73 964.853 378.101 963.444 374.686C959.468 365.055 986.235 344.869 1023.23 329.599C1047.1 319.744 1069.41 314.346 1083.29 314.345C1083.29 314.345 1083.29 314.345 1083.29 314.345C1090.92 314.345 1096 315.974 1097.41 319.389C1099.89 325.396 1090.41 335.508 1073.95 345.972C1073.95 346.209 1073.96 346.446 1073.96 346.684C1073.96 346.976 1073.96 347.267 1073.95 347.557C1073.9 349.553 1073.69 351.506 1073.39 353.43C1073.41 353.418 1073.43 353.405 1073.45 353.393C1097.54 338.812 1109.64 324.634 1105.82 315.395Z"
            fill="#FF9A13"
          />
          <path
            id="saturn-ring3"
            d="M1024.15 331.843C984.044 348.399 963.068 367.415 965.687 373.76C966.616 376.012 970.946 377.304 977.565 377.304C983.004 377.304 989.621 376.465 996.994 374.908C995.595 373.259 994.316 371.505 993.17 369.659C993.155 369.662 993.14 369.664 993.124 369.667C993.123 369.667 993.123 369.668 993.122 369.668C980.659 372.088 975.255 370.981 974.729 369.707C974.388 368.88 975.952 364.789 987.243 357.084C997.079 350.37 1010.92 343.186 1026.2 336.853C1041.49 330.521 1056.36 325.816 1068.06 323.607C1073.2 322.635 1076.96 322.299 1079.66 322.299C1084.02 322.299 1085.62 323.176 1085.83 323.685C1086.36 324.953 1083.32 329.556 1072.8 336.658C1072.79 336.665 1072.78 336.671 1072.78 336.677C1073.28 338.787 1073.63 340.955 1073.81 343.171C1089.31 333.082 1096.79 324.255 1095.17 320.315C1094.24 318.064 1089.91 316.772 1083.29 316.772V314.345L1083.29 316.772C1069.12 316.773 1047.02 322.407 1024.15 331.843Z"
            fill="#FF9A13"
          />
          <path
            id="saturn-ring4"
            d="M997.048 374.897C997.03 374.901 997.012 374.904 996.994 374.908C989.621 376.465 983.004 377.304 977.565 377.304C970.946 377.304 966.617 376.012 965.687 373.76C963.068 367.415 984.044 348.399 1024.15 331.843C1047.02 322.407 1069.12 316.773 1083.29 316.772L1083.29 314.345C1083.29 314.345 1083.29 314.345 1083.29 314.345C1069.41 314.346 1047.1 319.744 1023.23 329.599C986.235 344.869 959.468 365.055 963.444 374.686C964.853 378.102 969.937 379.73 977.565 379.73C983.357 379.73 990.629 378.778 998.855 376.967C998.867 376.964 998.878 376.961 998.891 376.959C998.251 376.295 997.645 375.6 997.048 374.897Z"
            fill="#F25601"
          />
          <path
            id="saturn-ring5"
            d="M1095.17 320.315C1096.79 324.255 1089.31 333.082 1073.81 343.171C1073.81 343.174 1073.8 343.177 1073.8 343.18C1073.88 344.105 1073.92 345.038 1073.94 345.979C1073.94 345.977 1073.95 345.974 1073.95 345.972C1090.41 335.508 1099.89 325.396 1097.41 319.389C1096 315.975 1090.92 314.345 1083.29 314.345V316.772C1089.91 316.772 1094.24 318.063 1095.17 320.315Z"
            fill="#F25601"
          />
          <path
            id="saturn-moon"
            d="M976.688 310.733C976.688 317.002 971.604 322.077 965.344 322.077C959.089 322.077 954 317.005 954 310.733C954 304.461 959.089 299.389 965.344 299.389C971.605 299.389 976.688 304.465 976.688 310.733Z"
            fill="#FEBE1E"
          />
        </g>
        <g id="neptune">
          <circle
            id="neptune-ellipse"
            cx={1181.46}
            cy={232.465}
            r={44.4646}
            fill="#5585BF"
          />
          <path
            id="neptune-patch1"
            d="M1148.55 259.17C1148.7 257.632 1150.13 256.696 1151.5 256.483C1154.99 255.939 1157.78 258.406 1160.31 260.243C1163.38 262.474 1166.57 265.321 1170.36 266.338C1171.52 266.653 1172.63 266.618 1173.29 265.723C1173.97 264.796 1173.77 263.968 1173.15 262.828C1171.11 259.094 1167.68 256.218 1164.56 253.489C1161.78 251.064 1158.71 248.867 1156.17 246.183C1154.83 244.78 1153.48 243.217 1152.57 241.464C1151.8 239.974 1150.92 237.354 1152.98 236.055C1157.86 232.974 1162.95 238.165 1166.05 240.92C1168.22 242.857 1170.47 244.697 1172.78 246.469C1175.73 248.737 1178.86 250.96 1182.49 252.1C1184.69 252.796 1188.15 253.193 1190.31 251.485C1192.4 249.844 1190.13 247.022 1188.94 245.873C1186.86 243.867 1184.44 242.278 1182.02 240.724C1179.61 239.17 1177.31 237.543 1175.03 235.819C1171.75 233.342 1168.35 231.001 1165.22 228.343C1162.86 226.344 1160.46 224.225 1158.79 221.555C1157.69 219.795 1156.5 217.331 1157.55 215.043C1158.55 212.839 1160.91 211.583 1163.11 211.796C1167.83 212.255 1171.71 216.143 1175 219.076C1180.21 223.716 1185.78 228.305 1192.08 231.413C1194.08 232.399 1196.42 233.326 1198.77 233.269C1199.4 233.255 1200.29 233.17 1200.39 232.356C1200.47 231.708 1200.33 231.053 1200.14 230.467C1200.1 230.337 1200.04 230.121 1199.97 229.963C1198.51 227.517 1196.04 225.609 1194.09 223.596C1191.69 221.113 1189 218.554 1187.48 215.344C1187 214.344 1186.6 212.953 1187.21 211.796C1187.91 210.46 1189.29 209.888 1190.65 209.774C1193.63 209.526 1195.82 210.95 1198.12 212.459C1199.38 213.291 1200.69 214.176 1202.27 214.37C1202.79 214.433 1205.04 214.826 1205.64 214.419C1205.64 214.405 1205.64 214.393 1205.63 214.377C1205.57 214.173 1205.5 213.97 1205.41 213.778C1205.19 213.341 1204.89 212.932 1204.59 212.556C1203.81 211.581 1202.93 210.706 1201.99 209.897C1200.17 208.338 1198.11 207.118 1196.16 205.737C1194.1 204.273 1191.77 202.627 1190.48 200.354C1189.4 198.431 1188.94 195.517 1190.94 193.644C1192.77 191.929 1195.55 192.36 1197.54 192.908C1199.9 193.564 1201.76 194.779 1203.7 196.184C1204.87 197.031 1206.06 197.937 1207.44 198.426C1208.03 198.634 1209.43 198.996 1210.25 198.599C1210.18 198.542 1210.12 198.485 1210.05 198.431C1209.77 198.192 1209.47 197.943 1209.12 197.672C1201.18 191.357 1191.62 188.017 1181.5 188.017C1167.85 188.017 1155.16 194.138 1146.67 204.812C1139.29 214.105 1135.96 225.72 1137.31 237.515C1138.58 248.607 1143.84 258.61 1152.19 265.906C1151.42 265.045 1150.69 264.149 1150.03 263.196C1149.23 262.053 1148.4 260.709 1148.55 259.17Z"
            fill="#91BCE0"
          />
          <path
            id="neptune-patch2"
            d="M1212.19 200.344C1212.19 200.339 1212.18 200.334 1212.18 200.329C1209.11 202.82 1205.27 200.817 1202.74 199.028C1200.17 197.21 1197.59 195.173 1194.15 195.195C1192.75 195.207 1191.87 196.006 1192.3 197.519C1192.74 199.076 1193.91 200.256 1195.07 201.256C1198.91 204.57 1203.71 206.689 1206.85 210.814C1207.92 212.226 1209.27 214.622 1207.38 216.318C1205.4 218.092 1201.39 217.392 1199.45 216.505C1198.01 215.849 1196.72 214.948 1195.4 214.095C1194.29 213.383 1193.01 212.517 1191.6 212.482C1190.92 212.463 1190.18 212.498 1189.68 212.756C1189.64 212.775 1189.62 212.784 1189.61 212.791C1189.61 212.803 1189.61 212.817 1189.6 212.836C1189.63 212.666 1189.66 213.165 1189.65 213.179C1189.72 213.439 1189.81 213.695 1189.91 213.941C1190.11 214.383 1190.51 215.019 1190.84 215.506C1191.85 216.961 1193.02 218.297 1194.21 219.589C1196.54 222.112 1199.1 224.418 1201.33 227.032C1203.39 229.435 1204.33 234.941 1199.81 235.875C1197.43 236.367 1194.93 235.655 1192.83 234.849C1189.56 233.598 1186.53 231.746 1183.73 229.731C1178.89 226.263 1174.57 222.226 1169.94 218.515C1168.12 217.053 1166.17 215.521 1163.88 214.811C1162.53 214.388 1159.69 214.466 1159.86 216.753C1160.02 218.922 1161.65 220.965 1163.04 222.401C1165.91 225.372 1169.16 227.898 1172.47 230.341C1175.23 232.382 1177.89 234.6 1180.75 236.499C1183.14 238.084 1185.61 239.548 1187.91 241.263C1189.92 242.772 1192.07 244.489 1193.17 246.868C1194.17 249.058 1194.18 251.968 1191.78 253.633C1186.09 257.585 1179.2 254.363 1174.65 251.346C1171.76 249.434 1168.99 247.27 1166.36 245.019C1164.39 243.342 1162.54 241.523 1160.45 239.998C1159.43 239.257 1158.37 238.498 1157.15 238.113C1156.48 237.9 1155.1 237.682 1154.45 238.202C1154.2 238.392 1154.61 239.319 1154.83 239.723C1155.35 240.655 1155.96 241.521 1156.62 242.339C1158.67 244.889 1161.36 246.987 1164.04 249.26C1167.49 252.185 1171.04 255.158 1173.84 258.756C1175.6 261.005 1177.88 264.685 1175.08 267.597C1172.29 270.501 1168.52 268.997 1165.85 267.464C1162.28 265.418 1159.15 262.743 1155.7 260.527C1154.63 259.839 1153.44 259.092 1152.31 259.129C1152.05 259.141 1151.48 259.226 1151.38 259.264C1151.31 259.292 1151.26 259.318 1151.22 259.342C1151.22 259.508 1151.22 259.456 1151.31 259.699C1151.8 261.083 1152.89 262.332 1153.86 263.439C1155.11 264.86 1156.45 266.189 1157.8 267.507C1159.04 268.722 1161.33 270.548 1162.4 272.618C1162.73 272.779 1163.07 272.937 1163.4 273.086C1169.1 275.624 1175.17 276.913 1181.44 276.913C1195.09 276.913 1207.78 270.792 1216.26 260.12C1230.66 241.998 1228.91 216.301 1212.19 200.344Z"
            fill="#5585BF"
          />
        </g>
        <path
          id="star1"
          d="M1009.82 135.239L1006.91 134.167C1004.56 133.298 1002.7 131.443 1001.83 129.089L1000.76 126.182C1000.72 126.073 1000.62 126 1000.5 126C1000.38 126 1000.28 126.073 1000.24 126.182L999.167 129.089C998.299 131.443 996.443 133.298 994.089 134.167L991.182 135.239C991.073 135.279 991 135.383 991 135.5C991 135.616 991.073 135.72 991.182 135.761L994.09 136.833C996.443 137.701 998.299 139.557 999.167 141.91L1000.24 144.818C1000.28 144.927 1000.38 145 1000.5 145C1000.62 145 1000.72 144.927 1000.76 144.818L1001.83 141.91C1002.7 139.557 1004.56 137.701 1006.91 136.833L1009.82 135.761C1009.93 135.72 1010 135.616 1010 135.5C1010 135.383 1009.93 135.279 1009.82 135.239Z"
          fill="#F0EEF0"
        />
        <path
          id="star2"
          d="M610 320.953C618.456 320.688 622.704 316.443 622.884 308C625.387 318.555 626.019 319.183 636 321.05C627.814 321.338 623.261 325.259 623.064 334C622.691 325.493 618.48 321.193 610 320.953Z"
          fill="#F0EEF0"
        />
        <path
          id="star3"
          d="M778 403.975C786.442 403.632 790.453 399.291 790.893 391C791.299 399.483 795.549 403.668 804 403.967C795.78 404.412 791.159 408.266 790.927 417C790.545 408.538 786.267 404.343 778 403.975Z"
          fill="#F0EEF0"
        />
        <motion.path
          id="star4"
          d="M1240.51 119C1240.03 115.427 1239.42 111.897 1238.63 108.39C1237.14 101.747 1233.1 97.8473 1226.58 96.3796C1223.54 95.6947 1220.48 95.1285 1217.39 94.6909C1217.04 94.6407 1216.69 94.5801 1216 94.4713C1219.61 93.9399 1222.85 93.3545 1226.09 92.7015C1233.37 91.2326 1237.5 86.7632 1238.91 79.4931C1239.52 76.3493 1240.1 73.2049 1240.63 70C1240.78 71.0223 1240.94 72.0446 1241.09 73.067C1241.47 75.6193 1241.99 78.1401 1242.56 80.6578C1244.03 87.1876 1248.01 91.0518 1254.43 92.5335C1257.88 93.329 1261.36 93.9193 1265 94.4374C1262.15 94.9386 1259.44 95.3772 1256.75 95.8982C1253.99 96.4335 1251.29 97.2006 1248.83 98.6628C1245.29 100.778 1243.67 104.21 1242.64 108.028C1241.72 111.428 1241.19 114.902 1240.73 118.388C1240.71 118.594 1240.81 118.855 1240.51 119Z"
          fill="#F0EEF0"
          animate={{
            scale: [1, 1, 1.3, 1, 1],
            rotate: [0, 0, 20, 0, 0],
            fill: ['#F0EEF0', '#F0EEF0', '#ffffff', '#F0EEF0', '#F0EEF0'],
          }}
          transition={{
            times: [0, 0.4, 0.6, 0.8, 1],
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 5,
            type: 'keyframes',
            ease: 'easeInOut',
          }}
        />
        <motion.path
          id="star5"
          d="M1252.68 75C1252.35 73.2747 1252.07 71.8915 1251.82 70.5023C1251.15 66.7739 1248.83 64.7889 1245.21 64.1474C1243.9 63.9164 1242.6 63.6816 1241 63.3964C1243.06 63.0712 1244.82 62.7956 1246.56 62.3206C1249.29 61.5718 1250.92 59.8139 1251.63 57.1118C1252.06 55.4759 1252.32 53.809 1252.75 52C1252.75 59.6 1256.58 63.2757 1264 63.4567C1263.59 63.5229 1263.18 63.5869 1262.77 63.656C1262.32 63.7316 1261.87 63.8017 1261.43 63.8917C1255.37 65.1184 1253.82 66.775 1252.99 72.9256C1252.91 73.5078 1252.82 74.088 1252.68 75Z"
          fill="#F0EEF0"
          animate={{
            scale: [1, 1, 1.3, 1, 1],
            rotate: [0, 0, 20, 0, 0],
            fill: ['#F0EEF0', '#F0EEF0', '#ffffff', '#F0EEF0', '#F0EEF0'],
          }}
          transition={{
            times: [0, 0.2, 0.4, 0.6, 1],
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 5,
            type: 'keyframes',
            ease: 'easeInOut',
          }}
        />
      </g>
    </g>
  </motion.svg>
)
export default SolarSystemSvg;
