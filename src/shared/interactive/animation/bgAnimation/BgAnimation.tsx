import React from 'react';

type bgAnimationType = {
   
};

export const BgAnimation:React.FC<bgAnimationType> = (props) => {
   const {} = props;

   return (
          <svg viewBox="0 0 618 2000" xmlns="http://www.w3.org/2000/svg"
               style={{
                  width: 'var(--icon_width, 618px)',
                  height: 'var(--icon_height, 100%)',
                  fill: 'var(--icon_fill, var(--background_secondary))',
                  display: 'flex'
               }}
          >
             <path id="bg"
                   d="M559.001 0.934326C585.947 62.4343 646.5 179.753 601 305.5C547 418.753 301.9 504.163 302.001 637.434C302.102 770.705 582.501 741.434 533.001 983.934C492.38 1182.93 401.899 1214.7 380 1348C358.101 1481.3 885.5 2000 198.5 2000H1.51246L1.46208 1933.37C1.41168 1866.73 1.31092 1733.45 1.21015 1600.18C1.10938 1466.91 1.00861 1333.64 0.90784 1200.37C0.807071 1067.1 0.706302 933.829 0.605532 800.558C0.504763 667.289 0.403994 534.018 0.303224 400.747C0.202455 267.476 0.101685 134.205 0.0513003 67.5697L0.000915527 0.934376L559.001 0.934326Z"></path>
                   <animate xlinkHref={"#bg"} attributeName="d" dur="15s" repeatCount="indefinite" values="
                           M559 0C585.946 61.5 347.5 126.753 302 252.5C248 365.753 313.798 440 407.5 585.5C488 710.5 608.5 768.5 559 1011C518.379 1210 301.399 1371.7 279.5 1505C257.601 1638.3 630.5 1972 198.499 1999.07H1.51155L1.46116 1932.43C1.41077 1865.8 1.31 1732.51 1.20923 1599.24C1.10846 1465.97 1.00769 1332.71 0.906925 1199.44C0.806156 1066.17 0.705386 932.895 0.604617 799.624C0.503847 666.354 0.403078 533.084 0.302309 399.813C0.201539 266.542 0.10077 133.271 0.0503848 66.6354L0 4.95911e-05L559 0Z;

                           M559 0C585.946 61.5 657 218.753 611.5 344.5C557.5 457.753 297.298 691.5 391 837C471.5 962 661 1157.5 611.5 1400C570.879 1599 351.899 1571.7 330 1705C308.101 1838.3 503.5 1972.5 198.499 1999.07H1.51155L1.46116 1932.43C1.41077 1865.8 1.31 1732.51 1.20923 1599.24C1.10846 1465.97 1.00769 1332.71 0.906925 1199.44C0.806156 1066.17 0.705386 932.895 0.604617 799.624C0.503847 666.354 0.403078 533.084 0.302309 399.813C0.201539 266.542 0.10077 133.271 0.0503848 66.6354L0 4.95911e-05L559 0Z;
                           M316 6.10352e-05C342.946 61.5001 450.5 199.753 405 325.5C351 438.753 583.798 546 677.5 691.5C758 816.5 342 1092 292.5 1334.5C251.879 1533.5 580.899 1665.7 559 1799C537.101 1932.3 372.501 1972.5 67.5 1999.07H1.51155L1.46116 1932.43C1.41077 1865.8 1.31 1732.51 1.20923 1599.24C1.10846 1465.97 1.00769 1332.71 0.906925 1199.44C0.806156 1066.17 0.705386 932.895 0.604617 799.624C0.503847 666.354 0.403078 533.084 0.302309 399.813C0.201539 266.542 0.10077 133.271 0.0503848 66.6354L0 8.39233e-05L316 6.10352e-05Z;
                           M559 2.28882e-05C585.946 61.5 677.5 372.5 559 504C505 617.253 278.798 874.5 372.5 1020C453 1145 844.5 1270 795 1512.5C754.379 1711.5 723.733 1822.95 499.5 1897.5C302.5 1963 419.5 1932.43 67.5 1999.07H1.51155L1.46116 1932.43C1.41077 1865.8 1.31 1732.51 1.20923 1599.24C1.10846 1465.97 1.00769 1332.71 0.906925 1199.44C0.806156 1066.17 0.705386 932.895 0.604617 799.624C0.503847 666.354 0.403078 533.084 0.302309 399.813C0.201539 266.542 0.10077 133.271 0.0503848 66.6353L0 0L559 2.28882e-05Z;

                           M559 0C585.946 61.5 347.5 126.753 302 252.5C248 365.753 313.798 440 407.5 585.5C488 710.5 608.5 768.5 559 1011C518.379 1210 301.399 1371.7 279.5 1505C257.601 1638.3 630.5 1972 198.499 1999.07H1.51155L1.46116 1932.43C1.41077 1865.8 1.31 1732.51 1.20923 1599.24C1.10846 1465.97 1.00769 1332.71 0.906925 1199.44C0.806156 1066.17 0.705386 932.895 0.604617 799.624C0.503847 666.354 0.403078 533.084 0.302309 399.813C0.201539 266.542 0.10077 133.271 0.0503848 66.6354L0 4.95911e-05L559 0Z;
                           ">
                  </animate>
          </svg>
   );
};