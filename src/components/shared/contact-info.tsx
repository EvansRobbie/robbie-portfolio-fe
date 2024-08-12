import React from 'react'
import Link from 'next/link';
import { LayoutGrid, LogOut, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const ContactInfo = () => {
  return (
    <DropdownMenu>
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant='outline'
              className='relative h-8 w-8 rounded-full'
            >
              <Avatar className='h-12 w-12'>
                <AvatarImage src='#' alt='Avatar' />
                <AvatarFallback className='bg-transparent'>
                 EV
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side='bottom'>Contact Info</TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <DropdownMenuContent className='w-56' align='center' forceMount>
      <DropdownMenuLabel className='font-normal'>
        <div className='flex flex-col space-y-1'>
          <p className='text-sm font-medium leading-none'>
          Evanrobby Macharia
          </p>
          <p className='text-xs leading-none text-muted-foreground'>
            +2547 04 563 123
          </p>
          <p className='text-xs leading-none text-muted-foreground'>
            evansrobbie5311@gmail.com
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem className='hover:cursor-pointer' asChild>
          <Link href='/' className='flex items-center'>
            <LayoutGrid className='w-4 h-4 mr-3 text-muted-foreground' />
            Home
          </Link>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    
      {/* <DropdownMenuItem
        className='hover:cursor-pointer'
        onClick={handleSignout}
      >
        <LogOut className='w-4 h-4 mr-3 text-muted-foreground' />
        Sign out
      </DropdownMenuItem> */}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default ContactInfo