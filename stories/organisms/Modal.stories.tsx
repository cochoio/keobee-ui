import React, { useEffect, useState } from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Modal, ModalProps } from "@lib/organisms/Modal"
import { action } from "@storybook/addon-actions"
import { Button } from "@lib/atoms/Button"

export default {
  title: "@organisms/Modal",
  component: Modal,
} as Meta

const Template: Story<ModalProps> = (args) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    action("open", {
      allowFunction: true,
    })(open)
  }, [open])
  return (
    <>
      <Button onClick={() => setOpen(!open)}>open modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <h1>this is my modal</h1>
      </Modal>
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  open: false,
  node: document.body,
  onClose: () => null,
}
