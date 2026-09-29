import { nbsp } from '@/utils'

const PeachPie = () => (
  <>
    <h3>What is it?</h3>
    <p>
      Peach Pie is my attempt at a CMS for restaurants. The idea being I create
      and pitch templates which are easy to edit for normal folk. Eventually the
      platform could expand to cover other needs such as delivery integration,
      posting across social media, or creating a mobile{nbsp}app.
    </p>

    <h3>Why create it?</h3>
    <p>
      {`
      The CMS's I've used do not have a good user experience.  I believe a big
      reason for that is they try to do too much.  By focusing on a single
      industry and smaller use case, my hope is to provide an intuitive service
      that feels good to${nbsp}use.
      `}
    </p>

    <h3>Where can I see it?</h3>
    <p>
      <a href="/ux-clips#peach-pie">Here&apos;s</a>
      {` a demo of what I've${nbsp}built`}
    </p>
  </>
)

export default PeachPie
