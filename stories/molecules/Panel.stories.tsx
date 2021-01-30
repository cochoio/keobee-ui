import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Panel, PanelProps } from "@lib/molecules/Panel"
import { action } from "@storybook/addon-actions"

export default {
  title: "@molecules/Panel",
  component: Panel,
  subcomponents: {
    "Panel.Header": Panel.Header,
    "Panel.Body": Panel.Body,
  },
} as Meta

const Template: Story<PanelProps> = (args) => {
  return (
    <>
      <Panel className="mb-5">this is panel</Panel>

      <Panel>
        <Panel.Header>this is header</Panel.Header>
        <Panel.Body>this is body</Panel.Body>
      </Panel>
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {}
