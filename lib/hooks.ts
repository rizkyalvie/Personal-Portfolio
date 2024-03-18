import { SectionName } from "./types"
import { useEffect, useRef } from "react"
import { useScroll } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section-context"

export function useSectionInView(sectionName: SectionName, threshold: number) {

  const { ref, inView } = useInView({
    threshold
  })

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, timeOfLastClick])

  return {
    ref
  }

}

export function useScrollAnimation(offset: string) {
    
    const animationRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: animationRef,
        offset: ['0 1', '1 1']
    })

    return {
        animationRef,
        scrollYProgress
    }
}