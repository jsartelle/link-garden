'use client'
import {
  useState,
  useEffect,
  useRef,
  type PropsWithChildren,
  type MouseEvent,
  type TouchEvent,
  type CSSProperties,
} from 'react'

interface HoverCoordinatesProps {
  className?: string
}

/** NOTE: doesn't currently handle element resizing */
export default function HoverCoordinates({
  className = '',
  children,
}: PropsWithChildren<HoverCoordinatesProps>) {
  const wrapper = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | null>(null)
  const [width, setWidth] = useState<number | null>(null)
  const [left, setLeft] = useState<number | null>(null)
  const [top, setTop] = useState<number | null>(null)
  const [x, setX] = useState<number | null>(null)
  const [y, setY] = useState<number | null>(null)

  useEffect(() => {
    if (!wrapper.current) return
    // initial setup
    setHeight(wrapper.current.clientHeight)
    setWidth(wrapper.current.clientWidth)
    const rect = wrapper.current.getBoundingClientRect()
    setLeft(rect.left + window.scrollX)
    setTop(rect.top + window.scrollY)
  }, [wrapper])

  const updateCoords = (e: any) => {
    // TODO fix typing
    setX((e.touches?.[0].clientX ?? e.clientX) + window.scrollX - left!)
    setY((e.touches?.[0].clientY ?? e.clientY) + window.scrollY - top!)
  }

  const resetCoords = () => {
    setX(null)
    setY(null)
  }

  const style = {
    '--height': height + 'px',
    '--width': width + 'px',
    '--mouseX': x && x + 'px',
    '--mouseY': y && y + 'px',
  } as CSSProperties

  const classes = `hover-coordinates-wrapper ${className}`.trim()

  return (
    <div
      ref={wrapper}
      className={classes}
      style={style}
      onMouseMove={updateCoords}
      onTouchMove={updateCoords}
      onAnimationStart={resetCoords}
    >
      {children}
    </div>
  )
}
