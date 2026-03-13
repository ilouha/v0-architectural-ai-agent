"use client"

import { useEffect, useRef } from "react"

export function ArchitecturalBanner() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Animate the paths drawing in
    const paths = container.querySelectorAll("path")
    paths.forEach((path, index) => {
      const length = (path as SVGPathElement).getTotalLength?.() || 100
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`
      path.style.animation = `drawLine 2s ease-out ${index * 0.02}s forwards`
    })
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden opacity-[0.08]"
    >
      <style jsx global>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes panBackground {
          0% {
            transform: translate(0, 0) scale(1.5);
          }
          25% {
            transform: translate(-5%, -3%) scale(1.5);
          }
          50% {
            transform: translate(-10%, 0) scale(1.5);
          }
          75% {
            transform: translate(-5%, 3%) scale(1.5);
          }
          100% {
            transform: translate(0, 0) scale(1.5);
          }
        }
      `}</style>
      <svg 
        viewBox="0 0 792 612" 
        className="w-[200%] h-[200%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          animation: "panBackground 60s ease-in-out infinite"
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        <g id="05_DRAFTING" stroke="currentColor" className="text-primary">
          <g id="05_DRAFTING::05_LW05">
            <path d="M427.64194,465.38217 L536.4101,465.38217 L536.4101,459.45404 L427.64194,459.45404" strokeWidth="0.70015746" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M600.3306,608.9703 L607.6764,608.9703 L607.6764,404.81223 L600.3306,404.81223 z" strokeWidth="0.70015746" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M427.64194,459.45404 L427.64194,404.16788 L421.06946,404.16788 L421.06946,465.38217 L427.64194,465.38217" strokeWidth="0.70015746" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M464.86398,176.3317 L464.86398,233.02332 L53.230434,233.02332 L53.230434,239.38301 L471.2237,239.38301 L471.2237,176.3317 z" strokeWidth="0.70015746" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M431.07947,3.029703 L431.07947,183.79572 L437.43918,183.79572 L437.43918,3.029703 z" strokeWidth="0.70015746" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M551.17566,344.29562 L723.07196,344.29562 L723.07196,338.71512 L551.17566,338.71512 z" strokeWidth="0.70015746" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M671.40063,278.68744 L671.40063,321.80692 L665.04095,321.80692 L665.04095,278.68744 L622.65216,278.68744 L622.65216,272.32773 L723.07196,272.32773 L723.07196,278.68744 z" strokeWidth="0.70015746" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M511.2095,157.81046 L454.45828,157.81046 L454.45828,151.45076 L511.2095,151.45076 z" strokeWidth="0.70015746" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M368.6256,362.05176 L468.90552,362.05176 L468.90552,341.2517 L368.6256,341.2517 z" strokeWidth="0.70015746" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M582.1623,188.82112 L491.51575,188.82112 L491.51575,182.46144 L582.1623,182.46144 z" strokeWidth="0.70015746" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
          <g id="05_DRAFTING::05_DASHED" strokeWidth="0.24944882">
            <path d="M525.04877,307.85327 L530.7413,307.85327" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M536.4105,307.85327 L542.07983,307.85327" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M547.7491,307.85327 L553.4184,307.85327" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M559.08765,307.85327 L564.75696,307.85327" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M570.4263,307.85327 L576.1188,307.85327 L576.1188,301.93457 L570.4263,301.93457" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M564.75696,301.93457 L559.08765,301.93457" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M553.4184,301.93457 L547.7491,301.93457" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M542.07983,301.93457 L536.4105,301.93457" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M530.7413,301.93457 L525.04877,301.93457 L525.04877,295.9334" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M525.04877,290.26413 L525.04877,284.26297 L518.7918,284.26297 L518.7918,292.678" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M518.7918,298.3473 L518.7918,304.0166" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M518.7918,309.68588 L518.7918,315.35516" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M518.7918,321.02448 L518.7918,326.69376" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M518.7918,332.36307 L518.7918,338.03235" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M518.7918,343.70163 L518.7918,349.3709" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M518.7918,355.04022 L518.7918,360.7095" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M518.7918,366.3788 L518.7918,372.04807" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M518.7918,377.71738 L518.7918,383.38666" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M518.7918,389.05597 L518.7918,394.72525" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M518.7918,400.39453 L518.7918,408.8096 L525.04877,408.8096 L525.04877,400.8511" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M607.6764,468.59265 L613.16003,468.59265" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M618.82935,468.59265 L624.49866,468.59265" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M630.1679,468.59265 L635.65155,468.59265 L635.65155,462.13376" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M635.65155,456.46448 L635.65155,450.79517" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M635.65155,445.1259 L635.65155,439.4566" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M635.65155,433.78732 L635.65155,428.118" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M635.65155,422.44873 L635.65155,416.77942" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M635.65155,411.11017 L635.65155,405.44086" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M635.65155,399.77158 L635.65155,394.10226" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M635.65155,388.43298 L635.65155,382.7637" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M635.65155,377.0944 L635.65155,371.4251" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M635.65155,365.7558 L635.65155,360.08652" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M635.65155,354.41724 L635.65155,347.95837 L639.02155,347.95837" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M738.7696,268.78635 L734.1166,268.78635" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M728.4473,268.78635 L722.7781,268.78635" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M717.10876,268.78635 L711.43945,268.78635" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M705.77014,268.78635 L700.1008,268.78635" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M694.4316,268.78635 L688.76227,268.78635" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M683.09296,268.78635 L677.42365,268.78635" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M587.7313,187.08842 L587.7313,179.0913 L582.635,179.0913" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M576.9657,179.0913 L571.2964,179.0913" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M565.6271,179.0913 L559.95776,179.0913" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M554.2885,179.0913 L548.6192,179.0913" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M542.9499,179.0913 L537.2806,179.0913" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M531.6114,179.0913 L525.9421,179.0913" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M520.27277,179.0913 L515.17633,179.0913 L515.17633,171.35735" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M515.17633,165.68805 L515.17633,160.01877" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M515.17633,154.34947 L515.17633,146.61551 L507.48886,146.61551" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M501.81955,146.61551 L496.15027,146.61551" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M490.481,146.61551 L484.81168,146.61551" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M479.1424,146.61551 L473.47308,146.61551" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M467.80383,146.61551 L462.13452,146.61551" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M456.46524,146.61551 L450.79593,146.61551" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M445.12665,146.61551 L437.43918,146.61551" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M557.7992,286.94183 L557.7992,278.71704" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M557.7992,273.04776 L557.7992,267.37845" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M557.7992,261.70917 L557.7992,256.0399" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M557.7992,250.37059 L557.7992,244.7013" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M564.15894,222.02412 L564.15894,227.69342" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M564.15894,233.36272 L564.15894,239.032" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M564.15894,244.7013 L564.15894,250.37059" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M564.15894,256.0399 L564.15894,261.70917" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M564.15894,267.37845 L564.15894,273.04776" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M564.15894,278.71704 L564.15894,286.94183 L557.7992,286.94183" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M418.8543,468.59265 L421.71848,468.59265" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M427.38776,468.59265 L433.05707,468.59265" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M438.72632,468.59265 L444.39563,468.59265" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M450.0649,468.59265 L455.73422,468.59265" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M461.4035,468.59265 L467.07278,468.59265" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M472.74207,468.59265 L478.41138,468.59265" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M484.0807,468.59265 L489.74997,468.59265" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M331.4046,239.38301 L331.4046,245.91049" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M331.4046,251.57979 L331.4046,257.24908" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M331.4046,262.9184 L331.4046,268.58768" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M331.4046,274.25696 L331.4046,279.92624" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M331.4046,285.59555 L331.4046,291.26483" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M331.4046,296.93414 L331.4046,302.6034" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M331.4046,308.2727 L331.4046,313.94202" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M331.4046,319.6113 L331.4046,325.2806" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M331.4046,330.9499 L331.4046,336.61917" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M331.4046,342.28845 L331.4046,348.81595 L335.8419,348.81595" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M341.51117,348.81595 L347.18048,348.81595" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M352.84976,348.81595 L358.51904,348.81595" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M364.18835,348.81595 L368.6256,348.81595" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M464.86398,176.3317 L459.65552,176.3317" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M453.9862,176.3317 L448.31693,176.3317" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M442.6476,176.3317 L437.43918,176.3317" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M402.26126,260.06824 L407.12082,260.06824" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M412.79013,260.06824 L418.4594,260.06824" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M424.12872,260.06824 L429.79797,260.06824" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M435.4673,260.06824 L441.1366,260.06824" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M446.80588,260.06824 L452.4752,260.06824" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M458.14447,260.06824 L463.81375,260.06824" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M469.48303,260.06824 L475.15234,260.06824" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M738.7696,268.78635 L738.7696,277.19125" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M738.7696,282.86053 L738.7696,288.52985" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M738.7696,294.19913 L738.7696,299.86844" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M738.7696,305.5377 L738.7696,311.207" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M738.7696,316.87628 L738.7696,322.5456" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M738.7696,328.21487 L738.7696,333.88416" strokeLinecap="butt" strokeLinejoin="round" fill="none" />
            <path d="M738.7696,339.55344 L738.7696,347.95837" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </g>
      </svg>
    </div>
  )
}
