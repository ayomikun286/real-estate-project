import React from "react";

const CashIcon = () => {
  return (
    <svg
      width="18"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" fill="url(#pattern0_4_30)" />
      <defs>
        <pattern
          id="pattern0_4_30"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_4_30" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_4_30"
          width="96"
          height="96"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGXUlEQVR4nO2ca4hVVRTHf+OjB6lpmGRUkkbvl6Z9KIJeEPoly5EeWtGD6IFZIWhmakWFpoZFD+lFkmUUSWql9SEMK0olyxR62YMoTUd7k9XMiS1rZLrds9c9c9c+e2bYP1hfZu7/7rX3Pmfftdfa50AikUgkEolEIpFIJBKJRCKRSCQSiUT9DAAagRnA88A6YDOwA/hLbIf8zf3vOWA6MEa0lRwGjAceA76NoO8UjADmARuAFiBrp7XId8wFhldppxswDJgMfBhB36HoA0wCNtUx4JliG6WN3jk+nAjMB36LpI/CAcCdchtnJdkOYCbQL8en/sBdwM+R9KXQAFwO/FjiwGcV1gRMlKWkGgcBC4DmSPpgHAG8E3HgswpbDQzx+HsG8HVEvSkXeW7NIrYFuLaNTanz+34Cxnr87gu8EFFfN+42e8Dwqv20Snho8b1zlSVhqhKZhda3i70kPs46wQRkwCKgp6c/FwO7IuoLD/6rxoMfegIyYLkyCBcCf0fU10S3AFd+WROQAc9KtOb7PWuOqFexXPNjTEAG3K/08bbIeu/sWg+Gu1reACYAJ1S0tw9wPbBCuaraYy4XlYe7QhdH1OfG+RahZltzA390je0fD7xl2LYLEQd72nOpha8i6v83o5abrBbJnxSlO3CvoR9vK+vxWcqdF1q/h6uNr/zrqI/5hr5cobS1ILJ+d2Jtm2GHX6Z+ugHvG/mzVXa0eHI/v0TU784AWg3+H+KQBafXWVdoa67Y4mN6LH0f45Ty04qjvYH7gKXATTVs31cY+dWk5PPdFfprDP0kw8F3NloZ0NcrPj9H+fxlhr7dqrT1YAy9dSXrEI+Dw6p8/h/ZjOVxsKFvrszo48iy9SOMB3+XEnJNyNFNVDr2vaGPQ5W21papn2c8AdsV5/J+7J9RdKsNfdRSBJPL1G8wngAXivnIK76sVHRLDX1cr7R1TFn6AYYhXqu57+vhcW5kju6LiipZpa0x9LFZiu95NCj1bjN9o/Hgt5ov99FDsqFZZHM5fR9LytDPCNS5cYpzp0iSKuYE3FHnpspEH6rg4r5X4+QAvz9FzBVMfFxahl4Ll+oJRQfWMAl7S9bTV2MNZR8ovp1aht533qVec4WKWhkELAwQEPhscw0+BddvD9zJGynGmcBnJU2Ay/xq2eHg+tC3vgu3bi44CfsCswKUJivtzxpOhATXl7X2LpFbsgijJa3dpScg9BLU1n6X0Gy/ApNwviTquuwSFPJH2NfwZFlqamFWV/4RDhWG1mLf1LCbRCbqh64ahobaiBWxR2qoiFmWSzvURixUKqKozVE6c1JXTUWM6QCDn0nIeZxyTsj6sNgFdSbTTPTW6eg3JdGWZ9WeRszE7lY69JHxhGvp5G1l6T827Jg7lu1juUf7oqK1PK7oLgQfx5aptyxJvqs49oRH+5qiXWno52ylrSll6ocbdkzbnFzl0T6paN8z9NOlwn2sK1u/0bBzvpTDAM+D0OOUTm0x8k87VnJUDL3lwaxrFAdvqaJZozzSc6ihf9rBqodi6HsbHk10R7E1GoFX5Mihi372Vz5/g5FvLvfVy9NOP+VoYVD9TMOr7DTs6GZYutQ2TzNj6vsZvnpgraRjLZhk5NMW5U4bqFy9ofW7udLwLnhKdrD1MELy5hb+uHdbtDdELkO/ZwdneQRwkRTe28O5ygMPRWyVcl71HCUjEFr/H4YYn9lxh7DOKzDwBwKPGhZidgKHe9rro9RFQuurMtZwAlptk2RfR1apig2R59MWGy45mVyVvppDg6RAYum9zA0wCa02qqKtZYHacdU0H7dH1qvh36JOPAELlXX3EuXkRWh9TfQM9LKOUYEnYJmys25UXrYRWl+InlI+6ywTsFDp/Hh5XWUsfbtokKc6OvIEtMiam3fbN0iZsCWS3oQxRiHq57JbbrV6v3OnEm24MzovRdSbMlgSblkHsVVKnH22vCU3lj7oayu3Rhz4Jnl0qcGTm/GduA6tL4W+si42lTjw2yWruL+n6HOPJ40RWh+FXlJo+CTgwG+QYk4vzwPgD3sO9IbWdxiGSsS0vs4j5s1yemB2Tg22u2RLp+bUC0LrOwX9JTqYJrtqV3r8UpasXWJN8rc1st+YJoeWqp27GSTvjXgc+C6CPpFIJBKJRCKRSCQSiUQikUgkEolEgiL8CztiOUrGBr4DAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default CashIcon;
