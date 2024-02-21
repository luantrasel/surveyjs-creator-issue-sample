import { Fragment } from 'react'
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react'
import classNames from 'classnames'

export const DialogModal = ({ width = 'medium', fullHeight, noPadding, onClose, children }) => {
    return (
        <Transition appear show as={Fragment}>
            <HeadlessDialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/20 dark:bg-black/40" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <HeadlessDialog.Panel
                                className={classNames(
                                    'dark:bg-darkNeutral-900 dark:border-darkNeutral-800 w-full transform rounded-xl border border-neutral-100 bg-white text-left align-middle shadow-xl transition-all',
                                    {
                                        'max-w-xs': width === 'small',
                                        'max-w-lg': width === 'medium',
                                        'h-[calc(100vh-32px)]': fullHeight,
                                        'p-6': !noPadding,
                                        'overflow-hidden': noPadding,
                                    }
                                )}
                            >
                                {children}
                            </HeadlessDialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </HeadlessDialog>
        </Transition>
    )
}
