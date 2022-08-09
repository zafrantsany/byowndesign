import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Grid, Select } from "@mui/material";

export default function ColorPicker() {
  const [color, setColor] = useState("#F5A623");
  const [skinColor, setSkinColor] = useState("#F9E8D1");
  const [secondColor, setSecondColor] = useState("#D9D9D9");

  return (
    <div>
      <div className="colorPicker">
        <Select
          style={{
            transition: "ease all 500ms",
            backgroundColor: color,
            width: "36px",
            height: "36px",
            cursor: "pointer",
          }}
        >
          <SketchPicker
            disableAlpha
            color={color}
            onChange={(updatedColor) => {
              setColor(updatedColor.hex);
            }}
          />
        </Select>
        <Select
          style={{
            transition: "ease all 500ms",
            backgroundColor: skinColor,
            width: "36px",
            height: "36px",
            cursor: "pointer",
          }}
        >
          <SketchPicker
            disableAlpha
            color={skinColor}
            onChange={(updatedColor) => {
              setSkinColor(updatedColor.hex);
            }}
          />
        </Select>

        <Select
          style={{
            transition: "ease all 500ms",
            backgroundColor: secondColor,
            width: "36px",
            height: "36px",
            cursor: "pointer",
          }}
        >
          <SketchPicker
            disableAlpha
            color={secondColor}
            onChange={(updatedColor) => {
              setSecondColor(updatedColor.hex);
            }}
          />
        </Select>
      </div>
      <div className="illustrations">
        <Grid
          container
          padding="0 170px"
          spacing={{ xs: 2, md: 15 }}
          columns={{ xs: 4, sm: 8, md: 10, lg: 15 }}
        >
          {Array.from(Array(12)).map((_, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <svg
                width="100px"
                viewBox="0 0 1124 1498"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1124" height="1498" fill="#FFFFFF" />
                <path
                  d="M199.108 497.622C258.949 397.303 452.824 337.65 549.111 350.865C604.874 345.723 722.082 353.478 769.679 368.687C878.946 403.602 1003.88 614.22 1047.07 784.976C1082.6 926.311 1170.09 1117.08 1091.51 1266.93C1051.46 1320.44 892.898 1421.82 639.971 1445.14C466.184 1477.24 51.0924 1419.11 6.56926 1154.07C-29.0493 942.048 96.4133 669.778 199.108 497.622Z"
                  fill={secondColor}
                />
                <path
                  d="M948 1380.5C999 1408 1023.21 1392.97 1045 1398.5L1032.82 1436.83C1017.03 1454.1 978.882 1450.32 961.784 1446.27C934.729 1439.75 900.169 1398.71 888 1386L880 1335.74L935.5 1326.5C941.705 1355.01 935.5 1369 948 1380.5Z"
                  fill={skinColor}
                />
                <path
                  d="M905.584 1450.28C885.964 1448.57 884.878 1405.66 886.918 1382.11C918.511 1420.43 937.374 1413.69 985.257 1422.12C1016.03 1419.8 1020.5 1406.84 1023.54 1397.52C1038 1394 1070.43 1399.73 1082.98 1408.39C1092.5 1422.12 1079.78 1436.1 1073.5 1441C1057.87 1456.88 1025.1 1466.23 999.184 1461C967 1454.5 937 1453 905.584 1450.28Z"
                  fill={color}
                />
                <path
                  d="M851.369 1415.54C902.369 1443.04 926.574 1428.01 948.369 1433.54L936.19 1471.87C920.394 1489.14 882.25 1485.36 865.153 1481.32C838.097 1474.8 803.537 1433.76 791.369 1421.04L783.369 1370.78L838.869 1361.54C845.074 1390.06 838.869 1404.04 851.369 1415.54Z"
                  fill={skinColor}
                />
                <path
                  d="M808.953 1485.32C789.333 1483.62 788.247 1440.71 790.287 1417.15C821.879 1455.47 840.743 1448.74 888.626 1457.16C919.4 1454.85 923.864 1441.89 926.909 1432.57C941.369 1429.04 973.794 1434.77 986.346 1443.43C995.869 1457.16 983.146 1471.14 976.869 1476.04C961.239 1491.92 928.471 1501.28 902.553 1496.04C870.369 1489.54 840.369 1488.04 808.953 1485.32Z"
                  fill={color}
                />
                <path
                  d="M397 983C345.8 933.4 366.333 824.333 383 776L670 807.5L573.5 899.5L860 905C887.2 908.2 899 964 906 1005C919 1047 950.333 1250 965 1348C923.4 1367.2 885 1372 871 1372V1386C823 1413 799 1413 753 1413C721 1357.8 661.667 1196 636 1122C619.2 1074.8 601 1061.67 594 1061C549.667 1055.67 448.2 1032.6 397 983Z"
                  fill="black"
                />
                <path
                  d="M309.5 280C303.5 299.5 319.11 306.643 325 305.5C358.5 299 352 274 345 256.5C338 239 330.035 225 325 216.5C314.517 200.1 296.465 161.667 293 153C283.317 125.4 287.764 91.1667 290.5 84.5C317.896 0.500004 389.237 38.0619 412.106 70.6856V129.686C394.106 125.686 403.167 201.167 404.5 225C402.9 302.6 361.333 317 335 322C303.8 323.6 297 292.5 309.5 280Z"
                  fill="black"
                />
                <path
                  d="M406.083 67.6035C416.883 59.2035 424.917 67.4369 427.583 72.6035L423.583 129.604C404.843 136.781 399.729 120.706 398.594 117.137L398.583 117.104C391.583 95.1035 400.417 74.6035 406.083 67.6035Z"
                  fill={color}
                />
                <path
                  d="M517.5 385C571 389.5 567 333.5 571 313.5L618.5 309.5C624.1 371.5 637.5 381.5 651.5 379.5C649.9 383.1 655.5 459.167 631.5 487C623.1 484.2 536 413.167 517.5 385Z"
                  fill={skinColor}
                />
                <path
                  d="M543 308C491.8 293.6 480.333 238 481 212C553 194.4 594.5 129 606.5 103C624.1 155.8 674.333 160.667 697 152V174C697 248.5 668.5 279.786 652 295.5C622 324.071 565 316.667 543 308Z"
                  fill={skinColor}
                />
                <path
                  d="M697.5 65C712.7 109.4 703.833 158.833 697.5 178V160C633 160 618.5 139 607 112.5C596.6 173.3 516.833 209.167 480 221.5H458.5V246.5L442 239.5C403 193 410.667 128 420 90C441.2 29.2 498.667 14.3333 530.5 12C623.7 -24.8 680.667 32 697.5 65Z"
                  fill="black"
                />
                <path
                  d="M456 210.5C462.667 209.333 476.333 216.833 482.5 222.5C497.333 235.5 519 263 493 263C467 263 452.5 250.667 448.5 244.5C436.1 222.5 449.333 211.667 456 210.5Z"
                  fill={skinColor}
                />
                <path
                  d="M933 906.851V902.094C933 897.775 930.472 893.855 926.538 892.074L906.5 883L625 858L537 856C527.4 856 523.5 864.5 533 869.5L567.5 898C578.5 906.5 584 904.5 587.5 904.5L926.852 912.849C930.223 912.932 933 910.222 933 906.851Z"
                  fill="#838282"
                />
                <path
                  d="M384 405C404.8 374.6 489.333 378.667 525 385C553.991 413.991 608.87 458.394 618.615 463.545C619.775 464.158 620.226 462.843 620.653 461.597L620.681 461.517L649 379C679.4 379.8 710.667 381 723 385C761.4 400.2 771 459 778 494C789 549 787 651.333 783 687L714 695L642 807L613 810.5L560 807L537 840L495 832C442.2 824.8 369 780.333 339 759C321.4 737.4 319.667 702 321 687L329 549C337 465 369 418 384 405Z"
                  fill={color}
                />
                <path
                  d="M408 682C436 688 517.5 748 566 799.5C508.5 749.5 470.4 715.6 408 682Z"
                  fill="black"
                />
                <path
                  d="M431 696C440.266 667 443.2 589.2 448 538C448 572.667 448 667 431 696Z"
                  fill="black"
                />
                <path
                  d="M712 538C717.333 576.667 724.8 662.4 712 696C720 676.667 731.2 618 712 538Z"
                  fill="black"
                />
                <path
                  d="M587.698 863.549C576.24 861.839 565.545 844.362 560.198 842.463L539 837.334L563.062 802L581.396 810.548C596.521 809.181 609.087 808.649 614.625 810.548C634.677 817.387 644.417 839.233 649 845.312L640.406 863.549C634.295 861.649 638.229 869.248 631.812 873.807C625.396 878.366 615.937 879.333 612.906 876.087C605.458 868.108 599.156 865.259 587.698 863.549Z"
                  fill={skinColor}
                />
                <path
                  d="M725.589 686.076C705.635 688.764 693.087 702.876 689.308 709.596L585 889.92L917.199 900L1024.91 717.436C1030.58 703.996 1023.77 697.276 1015.84 692.796C999.511 686.524 815.536 685.702 725.589 686.076Z"
                  fill="#A39898"
                />
                <path
                  d="M412 867.562C382.153 810.385 336.245 869.923 308.84 842.515L252.936 900.745L350.126 1078.13L594 1071.56L551.105 1029.35C518 1001.56 513.833 1004 484 1004C470 1004 451.29 1018.31 433 987.562C417.568 961.618 441.847 924.738 412 867.562Z"
                  fill={secondColor}
                />
                <path
                  d="M358 748C358 720.8 319 673.333 307 638L259 662L291 874C315 882 393.678 934.975 402 929C441 901 400 834 373 802C364.941 792.449 358 748 358 748Z"
                  fill={secondColor}
                />
                <path
                  d="M271 638.555C281.797 638.023 316.222 649.796 330.976 686.229C332.387 689.175 333.411 692.097 333.974 694.947C333.101 691.896 332.095 688.992 330.976 686.229C321.375 666.19 293.821 645.086 271 638.555Z"
                  fill="black"
                />
                <path
                  d="M385.924 816.319C363.417 779.499 287.229 764.934 246 767C261.237 766.237 363.994 780.443 385.924 816.319Z"
                  fill="black"
                />
                <path
                  d="M515 1000C498.572 999.722 424.298 1005.9 383 1042C432.872 998.399 486.707 996.086 515 1000Z"
                  fill="black"
                />
                <path
                  d="M430.204 901.042C426.053 913.721 433.413 974.19 423.574 987.28C435.578 980.326 433.836 910.906 430.204 901.042Z"
                  fill="black"
                />
                <path
                  d="M571.491 1047C588.491 1059 587.691 1068.6 588.491 1075C586.433 1064 576.291 1053.4 571.491 1047Z"
                  fill="black"
                />
                <path
                  d="M784 1010C793.6 1032.4 848.333 1268 873 1372L842 1213L789 1001C771 955 753 938.133 725 926C755 939 778.667 987.333 784 1010Z"
                  fill="#353030"
                />
                <path
                  d="M930 1431C953.667 1428.67 998.6 1430 989 1454C994 1442.33 989.2 1421.4 930 1431Z"
                  fill="black"
                />
              </svg>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
