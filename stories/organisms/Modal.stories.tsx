import React, { useState } from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Modal, ModalProps } from "@lib/organisms/Modal"
import { action } from "@storybook/addon-actions"
import { Button } from "@lib/atoms/Button"

export default {
  title: "@organisms/Modal",
  component: Modal,
} as Meta

const Template: Story<ModalProps> = (args) => {
  return (
    <>
      <Modal {...args}>
        <h1>sdaf</h1>
      </Modal>
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  open: false,
  node: document.body,
}
