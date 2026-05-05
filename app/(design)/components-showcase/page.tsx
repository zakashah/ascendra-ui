import {
  AlertIcon,
  SimpleAlert,
} from '@/components/custom/common-ui/simple-alert';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { Button } from '@/components/custom/ui/button';
import { Checkbox } from '@/components/custom/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/custom/ui/radio-group';
import { InfoIcon } from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="flex flex-wrap items-end gap-10">
        <div className="flex items-end gap-4">
          <Button variant={'primary'} size={'lg'}>
            Button
          </Button>
          <Button variant={'primary'}>Button</Button>
          <Button variant={'primary'} size={'sm'}>
            Button
          </Button>
          <Button variant={'primary'} size={'xs'}>
            Button
          </Button>
        </div>
        <div className="flex items-end gap-4">
          <Button variant={'secondary'} size={'lg'}>
            Button
          </Button>
          <Button variant={'secondary'}>Button</Button>
          <Button variant={'secondary'} size={'sm'}>
            Button
          </Button>
          <Button variant={'secondary'} size={'xs'}>
            Button
          </Button>
        </div>
        <div className="flex items-end gap-4">
          <Button variant={'destructive'} size={'lg'}>
            Button
          </Button>
          <Button variant={'destructive'}>Button</Button>
          <Button variant={'destructive'} size={'sm'}>
            Button
          </Button>
          <Button variant={'destructive'} size={'xs'}>
            Button
          </Button>
        </div>
        <div className="flex items-end gap-4">
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      <div className="mt-15 flex flex-wrap items-end gap-10">
        <div className="flex items-end gap-4">
          <SimpleBadge variant={'default'}>Badge</SimpleBadge>
          <SimpleBadge variant={'secondary'}>Badge</SimpleBadge>
          <SimpleBadge variant={'orange'}>Badge</SimpleBadge>
          <SimpleBadge variant={'green'}>Badge</SimpleBadge>
          <SimpleBadge variant={'blue'}>Badge</SimpleBadge>
        </div>
      </div>
      <div className="mt-15 flex flex-wrap items-end gap-10">
        <div className="flex items-end gap-4">
          <SimpleAlert>
            <AlertIcon>
              <InfoIcon className="size-3" strokeWidth={3} />
            </AlertIcon>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </SimpleAlert>
          <SimpleAlert variant={'secondary'}>
            <AlertIcon variant={'secondary'}>
              <InfoIcon className="size-3" strokeWidth={3} />
            </AlertIcon>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </SimpleAlert>
        </div>
      </div>
      <div className="mt-15 flex flex-wrap items-end gap-10">
        <div className="flex items-end gap-4">
          <RadioGroup>
            <RadioGroupItem value="1" />
            <RadioGroupItem value="2" />
            <RadioGroupItem value="3" />
          </RadioGroup>
        </div>
      </div>
      <div className="mt-15 flex flex-wrap items-end gap-10">
        <div className="flex items-end gap-4">
          <Checkbox disabled />
        </div>
      </div>
    </div>
  );
};

export default page;
