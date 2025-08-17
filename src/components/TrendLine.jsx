import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import styles from './TrendLine.module.css'

/**
 * TrendLine component
 * @param {Object} props
 * @param {number[]} props.yValues - Array of y-values (equally spaced on x-axis)
 * @param {number} [props.width=400] - Width of the SVG
 * @param {number} [props.height=120] - Height of the SVG
 */
function TrendLine ({ yValues }) {
  const ref = useRef(null)
  const containerRef = useRef(null)
  /** @type {React.RefObject<HTMLDivElement>} */
  // @ts-ignore
  const typedContainerRef = containerRef
  const [dimensions, setDimensions] = useState({ width: 400, height: 120 })

  useEffect(() => {
    if (!typedContainerRef.current) return
    // Initial set
    const bounding = typedContainerRef.current.getBoundingClientRect()
    if (bounding) {
      setDimensions({ width: bounding.width, height: bounding.height })
    }
    // Resize observer
    const resizeObserver = new window.ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === typedContainerRef.current) {
          const { width, height } = entry.contentRect
          setDimensions({ width, height })
        }
      }
    })
    resizeObserver.observe(typedContainerRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    const { width, height } = dimensions
    if (!yValues || yValues.length === 0) return
    // Limit to max 5 points by downsampling if needed
    let limitedYValues = yValues
    if (yValues.length > 5) {
      const step = (yValues.length - 1) / 4
      limitedYValues = Array.from({ length: 5 }, (_, i) => yValues[Math.round(i * step)])
    }
    const svg = d3.select(ref.current)
    svg.selectAll('*').remove() // Clear previous

    // Margins for padding
    // const margin = { top: 10, right: 10, bottom: 10, left: 10 }
    const margin = { top: 0, right: 0, bottom: 0, left: 0 }
    const w = width - margin.left - margin.right
    const h = height - margin.top - margin.bottom

    // Ensure yValues is a number[] and filter out undefined/null
    const cleanYValues = limitedYValues.filter(v => typeof v === 'number' && !isNaN(v))
    if (cleanYValues.length === 0) return

    // Helper to ensure [number, number][]
    function toXYPairs (arr) {
      const out = []
      for (let i = 0; i < arr.length; i++) {
        const x = i
        const y = arr[i]
        if (typeof x === 'number' && typeof y === 'number' && Number.isFinite(x) && Number.isFinite(y)) {
          out.push([x, y])
        }
      }
      return out
    }
    const points = toXYPairs(cleanYValues)
    if (points.length < 2) return

    // X and Y scales
    const x = d3.scaleLinear()
      .domain([0, points.length - 1])
      .range([0, w])
    const y = d3.scaleLinear()
      .domain([
        Number(d3.max(cleanYValues) ?? 1),
        Number(d3.min(cleanYValues) ?? 0)
      ]) // Invert so higher values are up
      .range([margin.top, h + margin.top])

    // Line generator for [x, y] pairs
    const line = d3.line()
      .x(d => x(d[0]) + margin.left)
      .y(d => y(d[1]))
      .curve(d3.curveCatmullRom.alpha(0.5))

    // Area generator for [x, y] pairs
    const area = d3.area()
      .x(d => x(d[0]) + margin.left)
      .y0(h + margin.top)
      .y1(d => y(d[1]))
      .curve(d3.curveCatmullRom.alpha(0.5))

    // Draw area (shadow/fill)
    svg.append('path')
      // @ts-ignore
      .attr('d', area(points))
      .attr('fill', 'url(#trend-gradient)')
      .attr('opacity', 1)

    // Draw line
    svg.append('path')
      // @ts-ignore
      .attr('d', line(points))
      .attr('fill', 'none')
      .attr('stroke', '#BFC3C7')
      .attr('stroke-width', 2)
      .attr('stroke-linecap', 'round')

    // Gradient for area
    const defs = svg.append('defs')
    const gradient = defs.append('linearGradient')
      .attr('id', 'trend-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')
    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#BFC3C7')
      .attr('stop-opacity', 0.12)
    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#BFC3C7')
      .attr('stop-opacity', 0)
  }, [yValues, dimensions])

  return (
    <div className={styles.line} ref={typedContainerRef} style={{ position: 'relative' }}>
      <svg
        ref={ref}
        width='100%'
        height='100%'
        style={{ display: 'block', background: '#0B1016', borderRadius: 6 }}
      />
    </div>
  )
}

export default TrendLine
